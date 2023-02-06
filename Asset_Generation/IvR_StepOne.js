var bounds = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-90, 85],
          [0, 85],
          [90, 85],
          [179.999999, 85],
          [179.999999, -70],
          [90, -70],
          [0, -70],
          [-90, -70],
          [-179.999999, -70],
          [-179.999999, 85]]]);

var legend = ['Unclassified','Irrigated', 'Rainfed','Land','Water'];
var palette = ['green','orange','orange','orange','0000ff'];
//var palette = ['ff00ff','ffff00','ffff00','ffff00','0000ff'];

//var bandValues = [1,2,4];


var img = image.remap([1,2,4],[1,2,4])
//var img = img.remap([0,1,2,3,4],[0,1,1,0,1])
Map.addLayer(img, {palette: palette});



// set properties
//print('scale', img.select('img').projection().nominalScale());

img = img.set({
  time_start: ee.Date.fromYMD(2022, 1, 1, 'UTC').millis(),
  time_end: ee.Date.fromYMD(2022, 12, 31, 'UTC').millis(),
  time_upload: ee.Date(new Date()).millis(),
  scale: 30,
  scope: 'world',
  scope_name: 'Global',
  level: 1,
  version: '20220324',
  class_palette: palette,
  attribution: '',

});


var id = ee.String(img.get('scope_name'))
  .cat("_")
  .cat(ee.String(ee.Number(img.get('scale'))))
  .cat("m_L")
  .cat(ee.String(ee.Number(img.get('level'))))
  .cat("_v")
  .cat(ee.String(ee.Number(img.get('version'))))

img = img.set('id', id);

print(img.toDictionary())

//Map.addLayer(img);
//Map.addLayer(img.select('class'), {min:0, max: 6, palette: palette},'class');
//Map.addLayer(img.select('irrigatedwater'), {min:0, max: 4, palette:"000000,ff00ff,ffff00,ffff00,0000ff"},'water');
// Map.addLayer(img.select('water'), {min:0, max: 2, palette:"0000ff,00ffff"},'water');
// Map.addLayer(img.select('intensity'), {min:0, max: 3},'intensity');

saveImage(img);


function saveImage(img) {
  var asset_id = ee.String(img.get('scope_name'))
    .cat("_")
    .cat(ee.String(ee.Number(img.get('scale'))))
    .cat("m_L")
    .cat(ee.String(ee.Number(img.get('level'))))
    .cat("_y")
    .cat(ee.String('2014'))
    .cat("_v")
    .cat(ee.String(ee.Number(img.get('version'))));

  print(asset_id);
  asset_id = 'id';
  // Export to Assets
  Export.image.toAsset({
    image: img,
    maxPixels: 1e13,
    assetId: 'products/' + id,
    description: "export_image_asset_" + id,
    scale: 30,
    region: bounds
  });

  // Export to Storage for Download
  // var date = new Date();
  // var day = date.getDate();
  // var month = date.getMonth();
  // var year = date.getFullYear();
  // var dt = year.toString() + ("000" + month).slice(-2) + ("000" + day).slice(-2);
  // var storagePrefix = id.split('_',2).join("/") + "/" + id + "/";// + dt + "/";
  // print(storagePrefix)

  // Export.image.toCloudStorage({
  //   bucket: "gfsad-products",
  //   image: img,
  //   maxPixels: 1e13,
  //   fileNamePrefix: storagePrefix,
  //   description: "export_image_storage_" + id,
  //   scale: img.select('class').projection().nominalScale().int().getInfo(),
  //   region: img.geometry()
  // });

  // // Export Metadata Table
  // Export.table.toCloudStorage({
  //   bucket: "gfsad-products",
  //   collection: ee.FeatureCollection([ee.Feature(img.geometry(), img.toDictionary())]),
  //   fileNamePrefix: storagePrefix,
  //   description: "export_metadata_storage_" + id,
  //   fileFormat: 'geoJSON'
  // });
}


/**
 *
 * PROPERTIES
 * ----------
 * id: "UNIQUE STRING" "scope_name"_"scale"m_l"product_type"_"year"_"product_version"
 * version: [integer]
 * type: 1-5 [extent, intensity, irrigation, crop dominance, crop type]
 * start: "YYYY-MM-DD" (when is the product applicable - start)
 * end: "YYYY-MM-DD" (when is the product applicable - end)
 * upload: "YYYY-MM--DD" (Justin will set this)
 * scale: [10,30,255,1000, etc.]
 * scope: [country, continent, global]
 * scope_name: Africa, North America, Tunisia, Australia, etc.
 * class_palette: [000000,ffffff] or similar (should be in shared gee script)
 * class_legend: [not cropland, cropland] or similar
 *
 * BANDS
 * -----
 * class: values specific to product, detailed in class_legend
 * cropland: 0/1 [not cropland, cropland] (default:masked)
 * water: 0-2 [unknown, water, irrigated] (default:masked)
 * intensity: 0-4 [unknown, single, double, triple, continuous] (default:masked)
 * crop_primary: 0-100 [includes fallow, managed pasture] (see table below) (default:masked)
 * crop_secondary: 0-100 (default:masked)
 * confidence: 0-100 (default:masked)
 *
 * CROP TABLE as of 7/7/16
 * ----------
 * 0 'Unknown' or (n/a)
 * 1 'Wheat'
 * 2 'Maize (Corn)'
 * 3 'Rice'
 * 4 'Barley'
 * 5 'Soybeans'
 * 6 'Pulses'
 * 7 'Cotton'
 * 8 'Potatoes'
 * 9 'Alfalfa'
 * 10 'Sorghum'
 * 11 'Millet'
 * 12 'Sunflower'
 * 13 'Rye'
 * 14 'Rapeseed or Canola'
 * 15 'Sugarcane'
 * 16 'Groundnuts or Peanuts'
 * 17 'Cassava'
 * 18 'Sugarbeets'
 * 19 'Palm'
 * 20 'Others'
 * 21 'Plantations'
 * 22 'Fallow'
 * 23 'Tef'
 * 24 'Managed Pasture'
 *
 **/
