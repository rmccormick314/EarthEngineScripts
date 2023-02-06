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
    africa_2014 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2014"),
    africa_2013 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2013"),
    africa_2012 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2012"),
    africa_2011 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2011"),
    africa_2010 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2010"),
    africa_2009 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2009"),
    africa_2008 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2008"),
    africa_2007 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2007"),
    africa_2006 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2006"),
    africa_2005 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2005"),
    africa_2004 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2004"),
    africa_2003 = ee.Image("users/croplandsdev/ACMA-Africa-250m-2003"),
    image = ee.Image("users/croplandsdev/LGRIP30/LGRIP30-5c-Final-Final");

    var mod16 = ee.ImageCollection("MODIS/061/MOD13Q1");

    // Establish global variables
    var baseOpacity = 0.8
    var index = 0;

    // add credits for human settlement, water, non-cropland layer

    // ===================================================================================================
    sam = sam.updateMask(sam.neq(0));

    africa_2014 = africa_2014.updateMask(africa_2014.neq(0));
    africa_2013 = africa_2013.updateMask(africa_2013.neq(0));
    africa_2012 = africa_2012.updateMask(africa_2012.neq(0));
    africa_2011 = africa_2011.updateMask(africa_2011.neq(0));
    africa_2010 = africa_2010.updateMask(africa_2010.neq(0));
    africa_2009 = africa_2009.updateMask(africa_2009.neq(0));
    africa_2008 = africa_2008.updateMask(africa_2008.neq(0));
    africa_2007 = africa_2007.updateMask(africa_2007.neq(0));
    africa_2006 = africa_2006.updateMask(africa_2006.neq(0));
    africa_2005 = africa_2005.updateMask(africa_2005.neq(0));
    africa_2004 = africa_2004.updateMask(africa_2004.neq(0));
    africa_2003 = africa_2003.updateMask(africa_2003.neq(0));

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
    // ===================================================================================================
    function setLegend(legend, panel, index) {
      // Loop through all the items in a layer's key property,
      // creates the item, and adds it to the key panel.
      panel.clear();
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
        panel.add(
            ui.Panel([colorBox, description], ui.Panel.Layout.Flow('horizontal')));
      }
    }

    function generateUIelement(legend, name, index, defaultViz)
    {

      var cb = ui.Checkbox(name, defaultViz);

      var legend_panel = ui.Panel({
        style:
            {fontWeight: 'bold', fontSize: '10px', margin: '0 0 0 8px', padding: '0'}
      });
      var key = ui.Panel();
      legend_panel.add(key);
      setLegend(legend, key)
      var slider = ui.Slider({
        min: 0,
        max: 1,
        value: baseOpacity,
        step: 0.01
      });
      slider.onSlide(function(value) {
        Map.layers().get(index).setOpacity(value);
      });
      slider.style().set('stretch', 'horizontal')
      var slider_panel = ui.Panel()
      slider_panel.add(slider)
      cb.onChange(function(checked)
      {
        Map.layers().get(index).setShown(checked)
        if(checked)
        {
          setLegend(legend, key)
          slider_panel.add(slider)
        }
        else
        {
          key.clear()
          slider_panel.clear()
        }
      });

      toolPanel.add(cb)
      if(!defaultViz)
      {
        key.clear()
        slider_panel.clear()
      }
      toolPanel.add(legend_panel);
      toolPanel.add(slider_panel);
    }

    function generateUImultielement(productPanel, legend, name, index, defaultViz)
    {

      var cb = ui.Checkbox(name, defaultViz);

      var legend_panel = ui.Panel({
        style:
            {fontWeight: 'bold', fontSize: '10px', margin: '0 0 0 8px', padding: '0'}
      });
      var key = ui.Panel();
      legend_panel.add(key);
      setLegend(legend, key)
      var slider = ui.Slider({
        min: 0,
        max: 1,
        value: baseOpacity,
        step: 0.01
      });
      slider.onSlide(function(value) {
        Map.layers().get(index).setOpacity(value);
      });
      slider.style().set('stretch', 'horizontal')
      var slider_panel = ui.Panel()
      slider_panel.add(slider)
      cb.onChange(function(checked)
      {
        Map.layers().get(index).setShown(checked)
        if(checked)
        {
          setLegend(legend, key)
          slider_panel.add(slider)
        }
        else
        {
          key.clear()
          slider_panel.clear()
        }
      });

      productPanel.add(cb)
      if(!defaultViz)
      {
        key.clear()
        slider_panel.clear()
      }
      productPanel.add(legend_panel);
      productPanel.add(slider_panel);
    }
    // ===================================================================================================
    // Set map visibilty options and enable satellite base
    Map.setControlVisibility(
        {all: true, layerList: false, fullscreenControl: false});
    Map.setOptions('HYBRID')
    Map.setCenter(0, 20, 2.6);
    Map.setGestureHandling("greedy")

    // Clear map and add
    ui.root.setLayout(ui.Panel.Layout.flow('horizontal'));

    // Add a title and some explanatory text to a side panel.
    // 30m, 250m and 1000m Croplands products
    var header = ui.Label('Global Croplands Data', {fontSize: '28px', color: 'green', backgroundColor: 'rgba(255, 255, 255, 0)'});
    var text = ui.Label(
        'Click the checkbox next to a product to enable or disable viewing. Click and drag the slider to change transparency.',
        {fontSize: '14px', backgroundColor: 'rgba(255, 255, 255, 0)'});

    var breakOne = ui.Label('', {
          backgroundColor: 'black',
          // Use padding to give the box height and width.
          padding: '2px 0px 0px 90%',
          margin: '0'
        });

    var label30m = ui.Label('30m Products', {fontSize: '22px'})

    // Add interactive tool panel
    var toolPanel = ui.Panel([header, text], 'flow', {
        height: '100%',
        width: '20%',
        position: 'bottom-right',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      });

    // ===================================================================================================
    var breakFour = ui.Label('', {
          backgroundColor: 'black',
          // Use padding to give the box height and width.
          padding: '2px 0px 0px 90%',
          margin: '0'
        });

    var labelVizStuff = ui.Label('Data Visualization Tools', {fontSize: '22px'})
    toolPanel.add(breakFour)
    //toolPanel.add(labelVizStuff)

    var ndvi = mod16.filterDate('2022-01-01', '2023-01-01').select('NDVI');
    //Map.addLayer(ndvi.median(), {min: 0, max: 10000, palette: ['99c199', '006400'], opacity: 100, scale: 1}, 'NDVI');

    var nvdi_master_panel = ui.Panel({style: {position: 'top-right', backgroundColor: 'rgba(255,255,255,0)'}});
    var nvdi_panel = ui.Panel({style: {backgroundColor: 'rgba(255,255,255,1)'}}).add(ui.Label('Click on the map', {backgroundColor: 'rgba(255,255,255,1)'}));

    var data_cb = ui.Checkbox('(New!) Enable NDVI Chart Viewer');
    var sensors = ['MODIS 13']

    Map.add(nvdi_master_panel)

    var nvdi_checked = false;
    var nvdi_point;
    var sensor_master_panel = ui.Panel()
    var sensor_panel = ui.Select({
      items: sensors,
      value: sensors[0]
    });


    data_cb.onChange( function(checked)
    {
      if(checked)
      {

        nvdi_checked = true;
        nvdi_master_panel.add(nvdi_panel);
        sensor_master_panel.add(sensor_panel)
        Map.style().set({cursor: 'crosshair'});
        var start = ee.Date('2023-1-1T07:00:00');
        var now = Date.now();
        var end = ee.Date(now).format();
        var dateRange = ee.DateRange(start, end).evaluate(function(range) {
          var dateSlider = ui.DateSlider({
            start: ee.Date('2022-1-1T07:00:00'),
            end: ee.Date('2023-1-1T00:00:00'),
            value: Date.now(),
            period: 365,
            style: {width: '400px'}
          });
          //nvdi_master_panel.add(dateSlider.setValue(now));
        });
        // Set a callback function for when the user clicks the map.
        Map.onClick(function(coords, checked) {
          if (nvdi_checked)
          {
            // Create or update the location label (the second widget in the panel)
            nvdi_panel.clear()
            var location = 'Longitude: ' + coords.lon.toFixed(5) + ' ' +
                           'Latitude: ' + coords.lat.toFixed(5);
            nvdi_panel.widgets().set(1, ui.Label(location));

            // Add a red dot to the map where the user clicked.
            nvdi_point = ee.Geometry.Point(coords.lon, coords.lat);

            //Map.layers().set(index, ui.Map.Layer(nvdi_point, {color: 'FF0000'}));

            // Create a chart of NDVI over time.
            var chart = ui.Chart.image.series(ndvi, nvdi_point, ee.Reducer.mean(), 200)
                .setOptions({
                  title: 'NDVI Over Time',
                  vAxis: {title: 'NDVI'},
                  lineWidth: 1,
                  pointSize: 3,
                });

            // Add (or replace) the third widget in the panel by
            // manipulating the widgets list.
            nvdi_panel.widgets().set(2, chart);
          }
        });
      }
      else
      {
        nvdi_master_panel.clear(nvdi_panel)
        sensor_master_panel.clear(sensor_panel)
        nvdi_checked = false;
        Map.style().set({cursor: 'hand'});
      }
    })


    toolPanel.add(data_cb);
    toolPanel.add(sensor_master_panel)
    // ===================================================================================================

    toolPanel.add(breakOne)
    toolPanel.add(label30m)

    ui.root.widgets().add(toolPanel);

    var button = ui.Button("Button");
    var button2 = ui.Button("Button");
    var button3 = ui.Button("Button");

    var ProductPanel30m = ui.Panel( [button2, button3, button], ui.Panel.Layout.flow('horizontal') );
    // ===================================================================================================
    var layer30mProperties = {
      'Global Croplands Irrigated vs. Rainfed': {
        name: 'image',
        raw: image,
        visParams: {min: 0, max: 4, palette: ['blue','aaaaaa','00ff00', 'yellow', '8c510a']},
        legend: [
          {'Water / Ocean': 'blue'},
          {'Non-Croplands': 'aaaaaa'},
          {'Irrigated Croplands': '00ff00'},
          {'Rainfed Croplands': 'yellow'},
          {'Human Settlement': '8c510a'}],
        defaultVisibility: true
      },
      'Global Croplands Extent': {
        name: 'global_croplands_extent',
        raw: global_ext,
        visParams: {min: 1, max: 1, palette: ['00FF00']},
        legend: [{'Croplands': '00FF00'}],
        defaultVisibility: false
      },
      'South Asia, Iran, & Afghanistan Irrigated vs Rainfed': {
        name: 'sa_ia',
        raw: sa_ia,
        visParams: {min: 1, max: 3, palette: ['#ff00ff', '#ffff00', '#0000cc']},
        legend: [{'Irrigated': '#ff00ff'},
                 {'Rainfed': '#ffff00'},
                 {'Water Bodies': '#0000cc'}],
        defaultVisibility: false
      },
      'South America Irrigated vs Rainfed': {
        name: 'sam',
        raw: sam,
        visParams: {min: 1, max: 2, palette: ['#ff00ff', '#ffff00'], bands:['b1']},
        legend: [{'Irrigated': '#ff00ff'},
                 {'Rainfed': '#ffff00'}],
        defaultVisibility: false
      }
    }
    // ===================================================================================================
    for (var key in layer30mProperties) {
      var layer = layer30mProperties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      Map.add(ui.Map.Layer(image, {opacity: baseOpacity}, key, layer.defaultVisibility));
      generateUIelement(layer.legend, key, index, layer.defaultVisibility);
      index = index + 1;
    }
    // ===================================================================================================
    var layerUSProperties = {
      '2013': {
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
      '2012': {
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
        '2011': {
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
        '2010': {
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
        '2009': {
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
        '2008': {
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
        '2007': {
        name: 'NA2007',
        raw: NA2007,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        '2006': {
        name: 'NA2006',
        raw: NA2006,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        '2005': {
        name: 'NA2005',
        raw: NA2005,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        '2004': {
        name: 'NA2004',
        raw: NA2004,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        '2003': {
        name: 'NA2003',
        raw: NA2003,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
        '2002': {
        name: 'NA2002',
        raw: NA2002,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      },
      '2001': {
        name: 'NA2001',
        raw: NA2001,
        visParams: {min: 1, max: 2, palette: ['FFFF00', 'FF0000']},
        legend: [{'Corn-Soybean': 'FFFF00'}, {'Wheat-Barley': 'FF0000'}],
        defaultVisibility: false
      }
    }
    // ===================================================================================================
    var breakTwo = ui.Label('', {
          backgroundColor: 'black',
          // Use padding to give the box height and width.
          padding: '2px 0px 0px 90%',
          margin: '0'
        });

    var label250m = ui.Label('250m Products', {fontSize: '22px'})
    toolPanel.add(breakTwo)
    toolPanel.add(label250m)

    var us_cb = ui.Checkbox("United States (2001 - 2014)", false);
    toolPanel.add(us_cb);

    var USbuttonPanel = ui.Panel();
    var USboxPanel = ui.Panel([], ui.Panel.Layout.flow('vertical'), {margin: '0 0 0 20px'});


    for (var key in layerUSProperties)
    {
      var layer = layerUSProperties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      Map.add(ui.Map.Layer(image, {opacity: baseOpacity}, key, layer.defaultVisibility));
      generateUImultielement(USboxPanel, layer.legend, key, index, layer.defaultVisibility);
      index = index + 1;
    }

    toolPanel.add(USbuttonPanel);

    us_cb.onChange(function(checked)
      {
        if(checked)
        {
          USbuttonPanel.add(USboxPanel)
        }
        else
        {
          USbuttonPanel.clear()
        }
      });
    // ===================================================================================================
    var layerAfrica250Properties = {
      '2014': {
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
      },
      '2013': {
        name: 'africa_2013',
        raw: africa_2013,
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
      },
      '2012': {
        name: 'africa_2012',
        raw: africa_2012,
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
      },
      '2011': {
        name: 'africa_2011',
        raw: africa_2011,
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
      },
      '2010': {
        name: 'africa_2010',
        raw: africa_2010,
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
      },
      '2009': {
        name: 'africa_2009',
        raw: africa_2009,
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
      },
      '2008': {
        name: 'africa_2008',
        raw: africa_2008,
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
      },
      '2007': {
        name: 'africa_2007',
        raw: africa_2007,
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
      },
      '2006': {
        name: 'africa_2006',
        raw: africa_2006,
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
      },
      '2005': {
        name: 'africa_2005',
        raw: africa_2005,
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
      },
      '2004': {
        name: 'africa_2004',
        raw: africa_2004,
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
      },
      '2003': {
        name: 'africa_2003',
        raw: africa_2003,
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
    // ===================================================================================================
    var africa_cb = ui.Checkbox("Africa (ACMA) (2003 - 2014)", false);
    toolPanel.add(africa_cb);

    var AfricabuttonPanel = ui.Panel();
    var AfricaboxPanel = ui.Panel([], ui.Panel.Layout.flow('vertical'), {margin: '0 0 0 20px'});


    for (var key in layerAfrica250Properties)
    {
      var layer = layerAfrica250Properties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      Map.add(ui.Map.Layer(image, {opacity: baseOpacity}, key, layer.defaultVisibility));
      generateUImultielement(AfricaboxPanel, layer.legend, key, index, layer.defaultVisibility);
      index = index + 1;
    }

    toolPanel.add(AfricabuttonPanel);

    africa_cb.onChange(function(checked)
      {
        if(checked)
        {
          AfricabuttonPanel.add(AfricaboxPanel)
        }
        else
        {
          AfricabuttonPanel.clear()
        }
      });
    // ===================================================================================================
    var layerAustralia250Properties = {
      '2015': {
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
      '2014': {
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
      '2013': {
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
      '2012': {
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
      '2011': {
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
      '2010': {
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
      '2009': {
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
      '2008': {
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
      '2007': {
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
      '2006': {
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
      '2005': {
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
      '2004': {
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
      '2003': {
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
      '2002': {
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
      '2001': {
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
      '2000': {
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
    // ===================================================================================================
    var auz_cb = ui.Checkbox("Australia (ACCA) (2000 - 2015)", false);
    toolPanel.add(auz_cb);

    var auzbuttonPanel = ui.Panel();
    var auzboxPanel = ui.Panel([], ui.Panel.Layout.flow('vertical'), {margin: '0 0 0 20px'});


    for (var key in layerAustralia250Properties)
    {
      var layer = layerAustralia250Properties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      Map.add(ui.Map.Layer(image, {opacity: baseOpacity}, key, layer.defaultVisibility));
      generateUImultielement(auzboxPanel, layer.legend, key, index, layer.defaultVisibility);
      index = index + 1;
    }

    toolPanel.add(auzbuttonPanel);

    auz_cb.onChange(function(checked)
      {
        if(checked)
        {
          auzbuttonPanel.add(auzboxPanel)
        }
        else
        {
          auzbuttonPanel.clear()
        }
      });
    // ===================================================================================================
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
    // ===================================================================================================
    var breakThree = ui.Label('', {
          backgroundColor: 'black',
          // Use padding to give the box height and width.
          padding: '2px 0px 0px 90%',
          margin: '0'
        });

    var label1000m = ui.Label('1000m Products', {fontSize: '22px'})
    toolPanel.add(breakThree)
    toolPanel.add(label1000m)

    for (var key in layer1000mProperties) {
      var layer = layer1000mProperties[key];
      var image = layer.raw.select(0).visualize(layer.visParams);
      Map.add(ui.Map.Layer(image, {opacity: baseOpacity}, key, layer.defaultVisibility));
      generateUIelement(layer.legend, key, index, layer.defaultVisibility);
      index = index + 1;
    }
    // ===================================================================================================
