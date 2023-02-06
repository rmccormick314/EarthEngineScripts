// Author: Richard McCormick
// Last Updated: January 10th, 2023

// This toolkit is used to help release 30-m products in 10d x 10d grids on GEE.

// Example tile file name:
// GFSAD30AFCE_2015_N10E00_001_2017261090100.tif
// [Product Name]_[Product Data Date]_[Cordinates of Tile]_[Version of Tile]_[Date of Generation].tif
// YYYYJJJHHMMSS

// Set grid variable from grid asset
var grids = ee.FeatureCollection(table) // uploaded grid kml

// Get number of grids from grid asset
var ngrids = grids.size().getInfo()

// Convert the grids to a list from the asset
grids = grids.toList(ngrids)

// Add product and grid to map for visualization (optional)
Map.addLayer(image, {min:0, max:3, palette:['blue','aaaaaa','00ff00', 'yellow']}, 'LGRIP30-4cl-with-WC-10m-watermask');//LGRIP30 with WC-10m watermask
Map.addLayer(table,{},'10dtiles');

// Print each tile and total number of tiles to console for verification
print(grids)
print(ngrids)

// Main loop - iterate over each grid
for (var i = 0; i < ngrids; i++) {
    // Var for holding current grid tile
    var ft = ee.Feature(grids.get(i)).buffer(100)

    // Set correct name - LPDAAC compliant
    var gridIDa = ft.get('gridIDa').getInfo();
    gridIDa = gridIDa.replace('S0', 'N00');
    gridIDa = gridIDa.replace('E0', 'E00');
    gridIDa = gridIDa.replace('_', '');

    // Combine everything into final name
    var fd = ["LGRIP30", "2015", gridIDa, "001", "2023006170000"]; // time stamp need to be modified

    // Renamed band for LPDAAC
    var image_final = image.select('remapped').rename('landcover');

    // Export the grid tile to GEE Asset folder
    Export.image.toAsset
     (
       {
          image: image_final,                          // Image to be exported
          assetId: 'LGRIP30/' + fd.join('_'),          // Name of asset file
          description: fd.join('_'),                   // Task name on the right
          //folder: 'LGRIP30m',                        // Don't need folder for GEE asset
          region: ft.geometry(),                       // Portion of image defined by tile grid
          scale: 30,                                   // 30m resolution
          maxPixels: 1e13,                             // Maximum pixels for tile - increase as needed
          pyramidingPolicy:{'landcover': 'sample'},    // Sample pyramiding. Can also be set to 'mode'
          crs: 'EPSG:4326'                             // EPSG:4326 or EPSG:3857 will work
       }
      )
    // Export.image.toDrive({image: afce, description: fd.join('-'), folder: '', region: ft.geometry(), scale: 30, maxPixels:  1e13})
  }

  // Export.image.toDrive({image: image, description: Name, folder: 'Samerica_Irr_Rf', region: ft.geometry(), scale: 30, maxPixels: 1e13})
