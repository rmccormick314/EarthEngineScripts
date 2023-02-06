var map = image.visualize({
  min: 1,
  max: 2,
  palette: ['ff00ff','ffff00']
});

Map.addLayer(map);

  Export.image.toAsset({
    image: map,
    maxPixels: 1e13,
    assetId: 'products/',
    description: "export_image_asset_",
    scale: 30,
    region: map.geometry()
  });
