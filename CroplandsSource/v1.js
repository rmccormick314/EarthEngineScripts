var global_ext = ee.Image("users/croplandsdev/products/World_30m_croplandextent_20170722"),
    NA2001 = ee.Image("users/croplandsdev/products/NA_250m_2001"),
    NA2002 = ee.Image("users/croplandsdev/products/NA_250m_2002"),
    NA2003 = ee.Image("users/croplandsdev/products/NA_250m_2003"),
    NA2004 = ee.Image("users/croplandsdev/products/NA_250m_2004"),
    NA2005 = ee.Image("users/croplandsdev/products/NA_250m_2005"),
    NA2006 = ee.Image("users/croplandsdev/products/NA_250m_2006"),
    NA2007 = ee.Image("users/croplandsdev/products/NA_250m_2007"),
    NA2008 = ee.Image("users/croplandsdev/products/NA_250m_2008"),
    NA2009 = ee.Image("users/croplandsdev/products/NA_250m_2009"),
    NA2010 = ee.Image("users/croplandsdev/products/NA_250m_2010"),
    NA2011 = ee.Image("users/croplandsdev/products/NA_250m_2011"),
    NA2012 = ee.Image("users/croplandsdev/products/NA_250m_2012"),
    NA2013 = ee.Image("users/croplandsdev/products/NA_250m_2013"),
    thousandm_cropmask = ee.Image("USGS/GFSAD1000_V1"),
    human_settlement = ee.Image("users/croplandsdev/products/Human_Settlement_20170619"),
    thousandm_dominance = ee.Image("users/croplandsdev/products/croplands_dominance_1000m"),
    sa_ia = ee.Image("users/croplandsdev/products/SA_IA_rainfed_irrigated_20170628"),
    straya_rfvi = ee.Image("users/croplandsdev/products/Australia_rainfedvsirrigated_30m_color_20170803"),
    sam = ee.Image("users/croplandsdev/products/south-america-l3-irrigated-rainfed-2classes-1a"),
    auz_2000 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2000"),
    auz_2001 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2001"),
    auz_2002 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2002"),
    auz_2003 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2003"),
    auz_2004 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2004"),
    auz_2005 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2005"),
    auz_2006 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2006"),
    auz_2007 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2007"),
    auz_2008 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2008"),
    auz_2009 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2009"),
    auz_2010 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2010"),
    auz_2011 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2011"),
    auz_2012 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2012"),
    auz_2013 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2013"),
    auz_2014 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2014"),
    auz_2015 = ee.Image("users/croplandsdev/Australia_250m_ACCA_2015"),
    africa_2014 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2014");

    // Create map
    var mapPanel = ui.Map()

    sam = sam.updateMask(sam.neq(0));

    africa_2014 = africa_2014.updateMask(africa_2014.neq(0));

    auz_2000 = auz_2000.updateMask(auz_2000.neq(0));
    auz_2001 = auz_2001.updateMask(auz_2001.neq(0));
    auz_2002 = auz_2002.updateMask(auz_2002.neq(0));
    auz_2003 = auz_2003.updateMask(auz_2003.neq(0));
    auz_2004 = auz_2004.updateMask(auz_2004.neq(0));
    auz_2005 = auz_2005.updateMask(auz_2005.neq(0));
    auz_2006 = auz_2006.updateMask(auz_2006.neq(0));
    auz_2007 = auz_2007.updateMask(auz_2007.neq(0));
    auz_2008 = auz_2008.updateMask(auz_2008.neq(0));
    auz_2009 = auz_2009.updateMask(auz_2009.neq(0));
    auz_2010 = auz_2010.updateMask(auz_2010.neq(0));
    auz_2011 = auz_2011.updateMask(auz_2011.neq(0));
    auz_2012 = auz_2012.updateMask(auz_2012.neq(0));
    auz_2013 = auz_2013.updateMask(auz_2013.neq(0));
    auz_2014 = auz_2014.updateMask(auz_2014.neq(0));
    auz_2015 = auz_2015.updateMask(auz_2015.neq(0));

    // Set map visibilty options and enable satellite base
    mapPanel.setControlVisibility(
        {all: false, zoomControl: true, mapTypeControl: true});
    mapPanel.setOptions('SATELLITE');
    mapPanel.setCenter(0, 20, 2);

    // Clear map and add
    ui.root.widgets().reset([mapPanel]);
    ui.root.setLayout(ui.Panel.Layout.flow('horizontal'));

    var layer30mProperties = {
      'Global Croplands Extent': {
        name: 'global_croplands_extent',
        raw: global_ext,
        visParams: {min: 1, max: 1, palette: ['00FF00']},
        legend: [{'Croplands': '00FF00'}],
        defaultVisibility: true
      },
      'South Asia, Iran, & Afghanistan Irrigated vs Rainfed 30-m': {
        name: 'sa_ia',
        raw: sa_ia,
        visParams: {min: 1, max: 3, palette: ['#ff00ff', '#ffff00', '#0000cc']},
        legend: [{'Irrigated': '#ff00ff'},
                 {'Rainfed': '#ffff00'},
                 {'Water Bodies': '#0000cc'}],
        defaultVisibility: false
      },
      'South America Irrigated vs Rainfed 30-m': {
        name: 'sam',
        raw: sam,
        visParams: {min: 1, max: 2, palette: ['#ff00ff', '#ffff00'], bands:['b1']},
        legend: [{'Irrigated': '#ff00ff'},
                 {'Rainfed': '#ffff00'}],
        defaultVisibility: false
      }
    }

    // Add a title and some explanatory text to a side panel.
    var header = ui.Label('Global Croplands Data', {fontSize: '24px', color: 'green'});
    var text = ui.Label(
        '30m, 250, and 1000m Croplands satellite products. Click "Opacity" to enable or disable viewing layer.',
        {fontSize: '14px'});

    // Add interactive tool panel
    var toolPanel = ui.Panel([header, text], 'flow', {width: '300px'});
    ui.root.widgets().add(toolPanel);

    var select30mItems = Object.keys(layer30mProperties);

    // Add layers to the map and center it.
    for (var key in layer30mProperties) {
      var layer = layer30mProperties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      mapPanel.add(ui.Map.Layer(image, {}, key, layer.defaultVisibility));
    }

    print(mapPanel.layers());

    // Define the pulldown menu.  Changing the pulldown menu changes the map layer
    // and legend.
    var layer30mSelect = ui.Select({
      items: select30mItems,
      value: select30mItems[0],
      onChange: function(selected) {
        // Loop through the map layers and compare the selected element to the name
        // of the layer. If they're the same, show the layer and set the
        // corresponding legend.  Hide the others.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName());
        });
        setLegend30m(layer30mProperties[selected].legend);
      }
    });

    // Add the select to the toolPanel with some explanatory text.
    toolPanel.add(ui.Label('30m Products', {'font-size': '20px'}));
    toolPanel.add(layer30mSelect);

    // Create the legend.
    // Define a panel for the legend and give it a tile.
    var legendPanel30m = ui.Panel({
      style:
          {fontWeight: 'bold', fontSize: '10px', margin: '0 0 0 8px', padding: '0'}
    });
    toolPanel.add(legendPanel30m);

    var legendTitle = ui.Label(
        'Legend',
        {fontWeight: 'bold', fontSize: '10px', margin: '0 0 4px 0', padding: '0'});
    legendPanel30m.add(legendTitle);

    // Define an area for the legend key itself.
    // This area will be replaced every time the layer pulldown is changed.
    var keyPanel30m = ui.Panel();
    legendPanel30m.add(keyPanel30m);

    function setLegend30m(legend) {
      // Loop through all the items in a layer's key property,
      // creates the item, and adds it to the key panel.
      keyPanel30m.clear();
      for (var i = 0; i < legend.length; i++) {
        var item = legend[i];
        var name = Object.keys(item)[0];
        var color = item[name];
        var colorBox = ui.Label('', {
          backgroundColor: color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0'
        });
        // Create the label with the description text.
        var description = ui.Label(name, {margin: '0 0 4px 6px'});
        keyPanel30m.add(
            ui.Panel([colorBox, description], ui.Panel.Layout.Flow('horizontal')));
      }
    }

    // Set the initial legend.
    setLegend30m(layer30mProperties[layer30mSelect.getValue()].legend);

    // Create a visibility checkbox and an opacity slider.
    //
    // If the checkbox is clicked off, disable the layer pulldown and turn all the
    // layers off. Otherwise, enable the select, and turn on the selected layer.
    var checkbox30m = ui.Checkbox({
      label: 'Opacity',
      value: true,
      onChange: function(value) {
        var selected = layer30mSelect.getValue();
        // Loop through the layers in the mapPanel. For each layer,
        // if the layer's name is the same as the name selected in the layer
        // pulldown, set the visibility of the layer equal to the value of the
        // checkbox. Otherwise, set the visibility to false.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName() ? value : false);
        });

        // If the checkbox is on, the layer pulldown should be enabled, otherwise,
        // it's disabled.
        layer30mSelect.setDisabled(!value);
      }
    });


    // Create an opacity slider. This tool will change the opacity for each layer.
    // That way switching to a new layer will maintain the chosen opacity.
    var opacitySlider30m = ui.Slider({
      min: 0,
      max: 1,
      value: 1,
      step: 0.01,
    });
    opacitySlider30m.onSlide(function(value) {
      mapPanel.layers().forEach(function(element, index) {
        element.setOpacity(value);
      });
    });

    var viewPanel30m =
        ui.Panel([checkbox30m, opacitySlider30m], ui.Panel.Layout.Flow('horizontal'));
    toolPanel.add(viewPanel30m);

    var layerProperties = {
        'United States - 2013': {
        name: 'NA2013',
        raw: NA2013,
        visParams: {min: 1, max: 2, palette: [
          'FFFF00',
          'FF0000'
          ]},
        legend: [
          {'Corn-Soybean': 'FFFF00'},
          {'Wheat-Barley': 'FF0000'}
          ],
        defaultVisibility: false
      },
      'United States - 2012': {
        name: 'NA2012',
        raw: NA2012,
        visParams: {min: 1, max: 7, palette: [
          'FFFF00',
          'FF0000',
          '663300',
          '00FF00',
          '00FFFF',
          '0000FF',
          'FF6600'
          ]},
        legend: [
          {'Corn-Soybean': 'FFFF00'},
          {'Wheat-Barley': 'FF0000'},
          {'Potato': '663300'},
          {'Alfalfa': '00FF00'},
          {'Cotton': '00FFFF'},
          {'Rice': '0000FF'},
          {'Other Crops': 'FF6600'}
          ],
        defaultVisibility: false
      },
        'United States - 2011': {
        name: 'NA2011',
        raw: NA2011,
        visParams: {min: 1, max: 4, palette: [
          'FFFF00',
          'FF0000',
          '00FF00',
          '00FFFF'
          ]},
        legend: [
          {'Corn-Soybean': 'FFFF00'},
          {'Wheat-Barley': 'FF0000'},
          {'Alfalfa': '00FF00'},
          {'Cotton': '00FFFF'}
          ],
        defaultVisibility: false
      },
        'United States - 2010': {
        name: 'NA2010',
        raw: NA2010,
        visParams: {min: 1, max: 7, palette: [
          'FFFF00',
          'FF0000',
          '663300',
          '00FF00',
          '00FFFF',
          '0000FF',
          'FF6600'
          ]},
        legend: [
          {'Corn-Soybean': 'FFFF00'},
          {'Wheat-Barley': 'FF0000'},
          {'Potato': '663300'},
          {'Alfalfa': '00FF00'},
          {'Cotton': '00FFFF'},
          {'Rice': '0000FF'},
          {'Other Crops': 'FF6600'}
          ],
        defaultVisibility: false
      },
        'United States - 2009': {
        name: 'NA2009',
        raw: NA2009,
        visParams: {min: 1, max: 4, palette: [
          'FFFF00',
          'FF0000',
          '00FF00',
          '00FFFF'
          ]},
        legend: [
          {'Corn-Soybean': 'FFFF00'},
          {'Wheat-Barley': 'FF0000'},
          {'Alfalfa': '00FF00'},
          {'Cotton': '00FFFF'}
          ],
        defaultVisibility: false
      },
        'United States - 2008': {
        name: 'NA2008',
        raw: NA2008,
        visParams: {min: 1, max: 7, palette: [
          'FFFF00',
          'FF0000',
          '663300',
          '00FF00',
          '00FFFF',
          '0000FF',
          'FF6600'
          ]},
        legend: [
          {'Corn-Soybean': 'FFFF00'},
          {'Wheat-Barley': 'FF0000'},
          {'Potato': '663300'},
          {'Alfalfa': '00FF00'},
          {'Cotton': '00FFFF'},
          {'Rice': '0000FF'},
          {'Other Crops': 'FF6600'}
          ],
        defaultVisibility: false
      },
        'United States - 2007': {
        name: 'NA2007',
        raw: NA2007,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        'United States - 2006': {
        name: 'NA2006',
        raw: NA2006,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        'United States - 2005': {
        name: 'NA2005',
        raw: NA2005,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        'United States - 2004': {
        name: 'NA2004',
        raw: NA2004,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        'United States - 2003': {
        name: 'NA2003',
        raw: NA2003,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        'United States - 2002': {
        name: 'NA2002',
        raw: NA2002,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
      'United States - 2001': {
        name: 'NA2001',
        raw: NA2001,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      }
    }

    // Add the select to the toolPanel with some explanatory text.
    toolPanel.add(ui.Label('250m Products', {'font-size': '20px'}));

    var selectItems = Object.keys(layerProperties);

    // Add layers to the map and center it.
    for (var key in layerProperties) {
      var layer = layerProperties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      mapPanel.add(ui.Map.Layer(image, {}, key, layer.defaultVisibility));
    }

    // Define the pulldown menu.  Changing the pulldown menu changes the map layer
    // and legend.
    var layerSelect = ui.Select({
      items: selectItems,
      value: selectItems[0],
      onChange: function(selected) {
        // Loop through the map layers and compare the selected element to the name
        // of the layer. If they're the same, show the layer and set the
        // corresponding legend.  Hide the others.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName());
        });
        setLegend(layerProperties[selected].legend);
      }
    });

    // Add the select to the toolPanel with some explanatory text.
    toolPanel.add(layerSelect);

    // Create the legend.
    // Define a panel for the legend and give it a tile.
    var legendPanel = ui.Panel({
      style:
          {fontWeight: 'bold', fontSize: '10px', margin: '0 0 0 8px', padding: '0'}
    });
    toolPanel.add(legendPanel);

    var legendTitle = ui.Label(
        'Legend',
        {fontWeight: 'bold', fontSize: '10px', margin: '0 0 4px 0', padding: '0'});
    legendPanel.add(legendTitle);

    // Define an area for the legend key itself.
    // This area will be replaced every time the layer pulldown is changed.
    var keyPanel = ui.Panel();
    legendPanel.add(keyPanel);

    function setLegend(legend) {
      // Loop through all the items in a layer's key property,
      // creates the item, and adds it to the key panel.
      keyPanel.clear();
      for (var i = 0; i < legend.length; i++) {
        var item = legend[i];
        var name = Object.keys(item)[0];
        var color = item[name];
        var colorBox = ui.Label('', {
          backgroundColor: color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0'
        });
        // Create the label with the description text.
        var description = ui.Label(name, {margin: '0 0 4px 6px'});
        keyPanel.add(
            ui.Panel([colorBox, description], ui.Panel.Layout.Flow('horizontal')));
      }
    }

    // Set the initial legend.
    setLegend(layerProperties[layerSelect.getValue()].legend);

    // Create a visibility checkbox and an opacity slider.
    //
    // If the checkbox is clicked off, disable the layer pulldown and turn all the
    // layers off. Otherwise, enable the select, and turn on the selected layer.
    var checkbox = ui.Checkbox({
      label: 'Opacity',
      value: false,
      onChange: function(value) {
        var selected = layerSelect.getValue();
        // Loop through the layers in the mapPanel. For each layer,
        // if the layer's name is the same as the name selected in the layer
        // pulldown, set the visibility of the layer equal to the value of the
        // checkbox. Otherwise, set the visibility to false.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName() ? value : false);
        });

        // If the checkbox is on, the layer pulldown should be enabled, otherwise,
        // it's disabled.
        layerSelect.setDisabled(!value);
      }
    });

    layerSelect.setDisabled(true);


    // Create an opacity slider. This tool will change the opacity for each layer.
    // That way switching to a new layer will maintain the chosen opacity.
    var opacitySlider = ui.Slider({
      min: 0,
      max: 1,
      value: 1,
      step: 0.01,
    });
    opacitySlider.onSlide(function(value) {
      mapPanel.layers().forEach(function(element, index) {
        element.setOpacity(value);
      });
    });

    var viewPanel =
        ui.Panel([checkbox, opacitySlider], ui.Panel.Layout.Flow('horizontal'));
    toolPanel.add(viewPanel);

    var layerAfrica250Properties = {
      'Africa GCE 250m (ACCA) - 2014': {
        name: 'africa_2014',
        raw: africa_2014,
        visParams: {min: 0, max: 10, palette: ['e41a1c', '8dd3c7', '377eb8', '4daf4a', '984ea3', 'bebada', 'ff7f00', 'ffff33', 'e2e2e2','000000'], bands:['b1']},
        legend: [
          {'Irrigated, SC, season 2': 'e41a1c'},
          {'Irrigated, SC, season 1': '8dd3c7'},
          {'Irrigated, DC': '377eb8'},
          {'Irrigated, Continuous': '#4daf4a'},
          {'Rainfed, SC, season 2': '#984ea3'},
          {'Rainfed, SC, season 1': '#bebada'},
          {'Rainfed, DC': '#ff7f00'},
          {'Rainfed, Continuous': '#ffff33'},
          {'Fallow-lands': '#e2e2e2'},
          {'Not Cropland': '#000000'}
        ],
        defaultVisibility: false
      }
    }

    var selectAfrica250Items = Object.keys(layerAfrica250Properties);

    // Add layers to the map and center it.
    for (var key in layerAfrica250Properties) {
      var layer = layerAfrica250Properties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      mapPanel.add(ui.Map.Layer(image, {}, key, layer.defaultVisibility));
    }

    // Define the pulldown menu.  Changing the pulldown menu changes the map layer
    // and legend.
    var layerAfrica250Select = ui.Select({
      items: selectAfrica250Items,
      value: selectAfrica250Items[0],
      onChange: function(selected) {
        // Loop through the map layers and compare the selected element to the name
        // of the layer. If they're the same, show the layer and set the
        // corresponding legend.  Hide the others.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName());
        });
        setLegendAfrica250(layerAfrica250Properties[selected].legend);
      }
    });

    // Add the select to the toolPanel with some explanatory text.
    toolPanel.add(layerAfrica250Select);

    // Create the legend.
    // Define a panel for the legend and give it a tile.
    var legendPanelAfrica250 = ui.Panel({
      style:
          {fontWeight: 'bold', fontSize: '10px', margin: '0 0 0 8px', padding: '0'}
    });
    toolPanel.add(legendPanelAfrica250);

    var legendTitle = ui.Label(
        'Legend',
        {fontWeight: 'bold', fontSize: '10px', margin: '0 0 4px 0', padding: '0'});
    legendPanelAfrica250.add(legendTitle);

    // Define an area for the legend key itself.
    // This area will be replaced every time the layer pulldown is changed.
    var keyPanelAfrica250 = ui.Panel();
    legendPanelAfrica250.add(keyPanelAfrica250);

    function setLegendAfrica250(legend) {
      // Loop through all the items in a layer's key property,
      // creates the item, and adds it to the key panel.
      keyPanelAfrica250.clear();
      for (var i = 0; i < legend.length; i++) {
        var item = legend[i];
        var name = Object.keys(item)[0];
        var color = item[name];
        var colorBox = ui.Label('', {
          backgroundColor: color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0'
        });
        // Create the label with the description text.
        var description = ui.Label(name, {margin: '0 0 4px 6px'});
        keyPanelAfrica250.add(
            ui.Panel([colorBox, description], ui.Panel.Layout.Flow('horizontal')));
      }
    }

    // Set the initial legend.
    setLegendAfrica250(layerAfrica250Properties[layerAfrica250Select.getValue()].legend);

    // Create a visibility checkbox and an opacity slider.
    //
    // If the checkbox is clicked off, disable the layer pulldown and turn all the
    // layers off. Otherwise, enable the select, and turn on the selected layer.
    var checkboxAfrica250 = ui.Checkbox({
      label: 'Opacity',
      value: false,
      onChange: function(value) {
        var selected = layerAfrica250Select.getValue();
        // Loop through the layers in the mapPanel. For each layer,
        // if the layer's name is the same as the name selected in the layer
        // pulldown, set the visibility of the layer equal to the value of the
        // checkbox. Otherwise, set the visibility to false.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName() ? value : false);
        });

        // If the checkbox is on, the layer pulldown should be enabled, otherwise,
        // it's disabled.
        layerAfrica250Select.setDisabled(!value);
      }
    });

    layerAfrica250Select.setDisabled(true);

    // Create an opacity slider. This tool will change the opacity for each layer.
    // That way switching to a new layer will maintain the chosen opacity.
    var opacitySliderAfrica250 = ui.Slider({
      min: 0,
      max: 1,
      value: 1,
      step: 0.01,
    });
    opacitySliderAfrica250.onSlide(function(value) {
      mapPanel.layers().forEach(function(element, index) {
        element.setOpacity(value);
      });
    });

    var viewPanelAfrica250 =
        ui.Panel([checkboxAfrica250, opacitySliderAfrica250], ui.Panel.Layout.Flow('horizontal'));
    toolPanel.add(viewPanelAfrica250);

    var layerAustralia250Properties = {
      'Australia GCE 250m (ACCA) - 2015': {
        name: 'auz_2015',
        raw: auz_2015,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2014': {
        name: 'auz_2014',
        raw: auz_2014,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2013': {
        name: 'auz_2013',
        raw: auz_2013,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2012': {
        name: 'auz_2012',
        raw: auz_2012,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2011': {
        name: 'auz_2011',
        raw: auz_2011,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2010': {
        name: 'auz_2010',
        raw: auz_2010,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2009': {
        name: 'auz_2009',
        raw: auz_2009,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2008': {
        name: 'auz_2008',
        raw: auz_2008,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2007': {
        name: 'auz_2007',
        raw: auz_2007,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2006': {
        name: 'auz_2006',
        raw: auz_2006,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2005': {
        name: 'auz_2005',
        raw: auz_2005,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2004': {
        name: 'auz_2004',
        raw: auz_2004,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2003': {
        name: 'auz_2003',
        raw: auz_2003,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2002': {
        name: 'auz_2002',
        raw: auz_2002,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2001': {
        name: 'auz_2001',
        raw: auz_2001,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
      'Australia GCE 250m (ACCA) - 2000': {
        name: 'auz_2000',
        raw: auz_2000,
        visParams: {min: 1, max: 6, palette: ['FFFF00', '66FFFF', 'FF66FF', '00B0F0', '00B050', 'FBD4B4'], bands:['b1']},
        legend: [
          {'Croplands, rainfed, SC (Season 1 & 2), all crops': '#FFFF00'},
          {'Croplands, rainfed, SC, pastures': '#66FFFF'},
          {'Croplands, irrigated, SC, DC (Season 1 & 2), all crops': '#FF66FF'},
          {'Croplands, irrigated, SC, pastures': '#00B0F0'},
          {'Croplands, irrigated, continuous, orchards ': '#00B050'},
          {'Croplands,  fallow ': '#FBD4B4'}
        ],
        defaultVisibility: false
      },
    }

    var selectAustralia250Items = Object.keys(layerAustralia250Properties);

    // Add layers to the map and center it.
    for (var key in layerAustralia250Properties) {
      var layer = layerAustralia250Properties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      mapPanel.add(ui.Map.Layer(image, {}, key, layer.defaultVisibility));
    }

    // Define the pulldown menu.  Changing the pulldown menu changes the map layer
    // and legend.
    var layerAustralia250Select = ui.Select({
      items: selectAustralia250Items,
      value: selectAustralia250Items[0],
      onChange: function(selected) {
        // Loop through the map layers and compare the selected element to the name
        // of the layer. If they're the same, show the layer and set the
        // corresponding legend.  Hide the others.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName());
        });
        setLegendAustralia250(layerAustralia250Properties[selected].legend);
      }
    });

    // Add the select to the toolPanel with some explanatory text.
    toolPanel.add(layerAustralia250Select);

    // Create the legend.
    // Define a panel for the legend and give it a tile.
    var legendPanelAustralia250 = ui.Panel({
      style:
          {fontWeight: 'bold', fontSize: '10px', margin: '0 0 0 8px', padding: '0'}
    });
    toolPanel.add(legendPanelAustralia250);

    var legendTitle = ui.Label(
        'Legend',
        {fontWeight: 'bold', fontSize: '10px', margin: '0 0 4px 0', padding: '0'});
    legendPanelAustralia250.add(legendTitle);

    // Define an area for the legend key itself.
    // This area will be replaced every time the layer pulldown is changed.
    var keyPanelAustralia250 = ui.Panel();
    legendPanelAustralia250.add(keyPanelAustralia250);

    function setLegendAustralia250(legend) {
      // Loop through all the items in a layer's key property,
      // creates the item, and adds it to the key panel.
      keyPanelAustralia250.clear();
      for (var i = 0; i < legend.length; i++) {
        var item = legend[i];
        var name = Object.keys(item)[0];
        var color = item[name];
        var colorBox = ui.Label('', {
          backgroundColor: color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0'
        });
        // Create the label with the description text.
        var description = ui.Label(name, {margin: '0 0 4px 6px'});
        keyPanelAustralia250.add(
            ui.Panel([colorBox, description], ui.Panel.Layout.Flow('horizontal')));
      }
    }

    // Set the initial legend.
    setLegendAustralia250(layerAustralia250Properties[layerAustralia250Select.getValue()].legend);

    // Create a visibility checkbox and an opacity slider.
    //
    // If the checkbox is clicked off, disable the layer pulldown and turn all the
    // layers off. Otherwise, enable the select, and turn on the selected layer.
    var checkboxAustralia250 = ui.Checkbox({
      label: 'Opacity',
      value: false,
      onChange: function(value) {
        var selected = layerAustralia250Select.getValue();
        // Loop through the layers in the mapPanel. For each layer,
        // if the layer's name is the same as the name selected in the layer
        // pulldown, set the visibility of the layer equal to the value of the
        // checkbox. Otherwise, set the visibility to false.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName() ? value : false);
        });

        // If the checkbox is on, the layer pulldown should be enabled, otherwise,
        // it's disabled.
        layerAustralia250Select.setDisabled(!value);
      }
    });

    layerAustralia250Select.setDisabled(true);

    // Create an opacity slider. This tool will change the opacity for each layer.
    // That way switching to a new layer will maintain the chosen opacity.
    var opacitySliderAustralia250 = ui.Slider({
      min: 0,
      max: 1,
      value: 1,
      step: 0.01,
    });
    opacitySliderAustralia250.onSlide(function(value) {
      mapPanel.layers().forEach(function(element, index) {
        element.setOpacity(value);
      });
    });

    var viewPanelAustralia250 =
        ui.Panel([checkboxAustralia250, opacitySliderAustralia250], ui.Panel.Layout.Flow('horizontal'));
    toolPanel.add(viewPanelAustralia250);

    var layer1000mProperties = {
      'Global GCE Multi-Study Cropland Mask': {
        name: 'thousandm_cropmask',
        raw: thousandm_cropmask,
        visParams: {min: 0, max: 5, palette: ['black', 'FF00FF', '00FF00', 'FFFF00', '00FFFF', 'D2B58C']},
        legend: [
          {'Croplands, Irrigation Major': 'FF00FF'},
          {'Croplands, Irrigation Minor': '00FF00'},
          {'Croplands, Rainfed': 'FFFF00'},
          {'Croplands, Rainfed Minor Fragments': '00FFFF'},
          {'Croplands, Rainfed Very Minor Fragments': 'D2B58C'}
        ],
        defaultVisibility: false
      },
      'Global GCE Cropland Dominance': {
        name: 'thousandm_dominance',
        raw: thousandm_dominance,
        visParams: {min: 0, max: 9, palette: [
          'black',
          '0000FF',
          'A020EF',
          'FF00FF',
          '00FFFF',
          'FFFF00',
          '007A0B',
          '00FF00',
          '505012',
          'B2B2B2'
          ]},
        legend: [
          {'Irrigated: Wheat and Rice Dominant': '0000FF'},
          {'Irrigated: Mixed Crops 1: Wheat, Rice, Barley, Soybeans': 'A020EF'},
          {'Irrigated: Mixed Crops 2: Corn, Wheat, Rice, Cotton, Orchards': 'FF00FF'},
          {'Rainfed: Wheat, Rice, Soybeans, Sugarcane, Corn, Cassava': '00FFFF'},
          {'Rainfed: Wheat and Barley Dominant': 'FFFF00'},
          {'Rainfed: Corn and Soybeans Dominant': '007A0B'},
          {'Rainfed: Mixed Crops 1: Wheat, Corn, Rice, Barley, Soybeans': '00FF00'},
          {'Minor Fractions of Mixed Crops: Wheat, Maize, Rice, Barley, Soybeans': '505012'},
          {'Other Classes': 'B2B2B2'}
        ],
        defaultVisibility: false
      },
      'Human Settlement Layer': {
        name: 'human_settlement',
        raw: human_settlement,
        visParams: {min: 1, max: 1, palette: ['c2b280']},
        legend: [{'Human Settlement': 'c2b280'}],
        defaultVisibility: false
      }
    }

    var select1000mItems = Object.keys(layer1000mProperties);

    // Add layers to the map and center it.
    for (var key in layer1000mProperties) {
      var layer = layer1000mProperties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      mapPanel.add(ui.Map.Layer(image, {}, key, layer.defaultVisibility));
    }

    // Define the pulldown menu.  Changing the pulldown menu changes the map layer
    // and legend.
    var layer1000mSelect = ui.Select({
      items: select1000mItems,
      value: select1000mItems[0],
      onChange: function(selected) {
        // Loop through the map layers and compare the selected element to the name
        // of the layer. If they're the same, show the layer and set the
        // corresponding legend.  Hide the others.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName());
        });
        setLegend1000m(layer1000mProperties[selected].legend);
      }
    });

    // Add the select to the toolPanel with some explanatory text.
    toolPanel.add(ui.Label('1000m Products', {'font-size': '20px'}));
    toolPanel.add(layer1000mSelect);

    // Create the legend.
    // Define a panel for the legend and give it a tile.
    var legendPanel1000m = ui.Panel({
      style:
          {fontWeight: 'bold', fontSize: '10px', margin: '0 0 0 8px', padding: '0'}
    });
    toolPanel.add(legendPanel1000m);

    var legendTitle = ui.Label(
        'Legend',
        {fontWeight: 'bold', fontSize: '10px', margin: '0 0 4px 0', padding: '0'});
    legendPanel1000m.add(legendTitle);

    // Define an area for the legend key itself.
    // This area will be replaced every time the layer pulldown is changed.
    var keyPanel1000m = ui.Panel();
    legendPanel1000m.add(keyPanel1000m);

    function setLegend1000m(legend) {
      // Loop through all the items in a layer's key property,
      // creates the item, and adds it to the key panel.
      keyPanel1000m.clear();
      for (var i = 0; i < legend.length; i++) {
        var item = legend[i];
        var name = Object.keys(item)[0];
        var color = item[name];
        var colorBox = ui.Label('', {
          backgroundColor: color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0'
        });
        // Create the label with the description text.
        var description = ui.Label(name, {margin: '0 0 4px 6px'});
        keyPanel1000m.add(
            ui.Panel([colorBox, description], ui.Panel.Layout.Flow('horizontal')));
      }
    }

    // Set the initial legend.
    setLegend1000m(layer1000mProperties[layer1000mSelect.getValue()].legend);

    // Create a visibility checkbox and an opacity slider.
    //
    // If the checkbox is clicked off, disable the layer pulldown and turn all the
    // layers off. Otherwise, enable the select, and turn on the selected layer.
    var checkbox1000m = ui.Checkbox({
      label: 'Opacity',
      value: false,
      onChange: function(value) {
        var selected = layer1000mSelect.getValue();
        // Loop through the layers in the mapPanel. For each layer,
        // if the layer's name is the same as the name selected in the layer
        // pulldown, set the visibility of the layer equal to the value of the
        // checkbox. Otherwise, set the visibility to false.
        mapPanel.layers().forEach(function(element, index) {
          element.setShown(selected == element.getName() ? value : false);
        });

        // If the checkbox is on, the layer pulldown should be enabled, otherwise,
        // it's disabled.
        layer1000mSelect.setDisabled(!value);
      }
    });

    layer1000mSelect.setDisabled(true);

    // Create an opacity slider. This tool will change the opacity for each layer.
    // That way switching to a new layer will maintain the chosen opacity.
    var opacitySlider1000m = ui.Slider({
      min: 0,
      max: 1,
      value: 1,
      step: 0.01,
    });
    opacitySlider1000m.onSlide(function(value) {
      mapPanel.layers().forEach(function(element, index) {
        element.setOpacity(value);
      });
    });

    var viewPanel1000m =
        ui.Panel([checkbox1000m, opacitySlider1000m], ui.Panel.Layout.Flow('horizontal'));
    toolPanel.add(viewPanel1000m);
