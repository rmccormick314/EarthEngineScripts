// Author: Richard McCormick
// Last Updated: January 10th, 2023

// This toolkit is used to help release 30-m products in 10d x 10d grids on GEE.

// Example tile file name:
// GFSAD30AFCE_2015_N10E00_001_2017261090100.tif
// [Product Name]_[Product Data Date]_[Cordinates of Tile]_[Version of Tile]_[Date of Generation].tif
// YYYYJJJHHMMSS

// Grid table imported as a variable
var grids = ee.FeatureCollection(alaska_table)  // Run first as global_table and second with pacific_table

// Calculate the number of total grid tiles and convert them to a list
var ngrids = grids.size().getInfo()
grids = grids.toList(ngrids)

// Add product and grid to map for visualization
Map.addLayer(image, {min:0, max:3, palette:['blue','aaaaaa','00ff00', 'yellow']}, 'LGRIP30-4cl-with-WC-10m-watermask');//LGRIP30 with WC-10m watermask
//Map.addLayer(global_table,{},'10dtiles');
//Map.addLayer(pacific_table,{},'10dtiles_pacific');
//Map.addLayer(alaska_table,{},'10dtiles_alaska');

// Print list of grids and number of grids to console for reference
print(grids)
print(ngrids)

// Get current date/time
var datetime = ee.Date(Date.now())
var processingTime = datetime.format('yyyyDDDHHmmss', 'America/Phoenix');

// Renamed band for LPDAAC
var image_final = image.select('remapped').rename('landcover');

//throw'stop'

// Main loop - goes over each grid
for (var i = 0; i < ngrids; i++)
{
    // Get the current grid tile
    var ft = ee.Feature(grids.get(i)).buffer(100)

    // Get name of tile from properties
    var gridIDa = ft.get('gridIDa').getInfo();
    gridIDa = gridIDa.replace('S0', 'N00');
    gridIDa = gridIDa.replace('E0', 'E00');
    gridIDa = gridIDa.replace('_', '');

    // Set final name using variables
    var file_name = ["LGRIP30", "2015", gridIDa, "001", processingTime.getInfo()]; // Stamps with current datetime
    Export.image.toDrive
     (
       {
          image: image_final,                   // Image to export
          description: file_name.join('_'),     // Name of task on the right
          folder: 'LGRIP30_2023010_regenerated',     // Folder in Google Drive to export to
          region: ft.geometry(),                // Region to export - bounded by current grid tile
          scale: 30,                            // Resolution - 30m
          maxPixels: 10000000000000,            // Maximum pixels for exported asset
          crs: 'EPSG:3857',                     // Cordinate Reference System - EPSG:4326 or EPSG:3857
          formatOptions:
          {
            cloudOptimized: true                // LPDAAC prefers cloud-optimized geotiffs (COGs)
          }
        }
      )
  }
