/**
 * Initialize the map on the page
 *   - set vars to different map layers
 *   - group maps into different objects
 *   - add layer control
 */

// Basemap Layers
var natGeoLayer = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
});

var mapQuestOpenAerial = L.tileLayer('http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
    attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
    subdomains: '1234'
});


// Weather Layers

var cloudLayer = L.tileLayer('http://{s}.tile.openweathermap.org/map/clouds_cls/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
    opacity: 0.7
});

var precipitationLayer = L.tileLayer('http://{s}.tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
    opacity: 0.5
});

var pressureCountourLayer = L.tileLayer('http://{s}.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
    opacity: 0.5
});

// Create Map
var map = L.map('basic-map', {
    center: [39.952299, -75.163256],
    zoom: 5,
    layers: [natGeoLayer, cloudLayer]
});

// Create LayerGroups
var baseMaps = {
    "ESRI National Geographic": natGeoLayer,
    "MapQuest Open Aerial": mapQuestOpenAerial
}

var weatherMaps = {
    "Clouds": cloudLayer,
    "Precipitation": precipitationLayer,
    "Pressure": pressureCountourLayer
};

// Add layers control
// For more information - see: http://leafletjs.com/examples/layers-control.html
L.control.layers(baseMaps, weatherMaps).addTo(map);
