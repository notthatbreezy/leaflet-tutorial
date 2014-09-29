/**
 * Add points from geojson on the map
 *
 * Most of the time you will not have geojson
 * included in your javascript source files so
 * your data will need to be downloaded from an
 * an external source
 */

// Center on Philadelphia
var map = L.map('basic-map').setView([39.952299, -75.163256], 13);

/**
 * Add OpenStreetMap tiles to the map
 */
L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> |' +
        ' Farmers Markets Data obtained from <a href="https://github.com/CityOfPhiladelphia/phl-open-geodata">' +
        'City of Philadephia</a>'
}).addTo(map);


/**
 * URL to get farmers markets from
 * Credit: https://github.com/CityOfPhiladelphia/phl-open-geodata
 */
var farmersMarketsURL = "/static/data/farmers_markets.geojson"

// Icon used on map
var cornucopiaIcon = L.icon({
    iconUrl: '/static/lib/images/cornucopia.png',
    iconSize: [60,50]
});

/**
 * Function to create markers given a geojson feature
 * and leaflet lat + lng object
 *
 * @param {object} feature - geojson feature with properties
 * @param {object} latlng - leaflet lat + lng object
 *
 * @return {object} Returns a leaflet marker object
 */
var createMarker = function(feature, latlng) {
    var marker = L.marker(latlng, {icon: cornucopiaIcon});
    marker.bindPopup('<b>' + feature.properties.NAME + '</b><br/>' +
                     feature.properties.ADDRESS + '<br/>' +
                     feature.properties.DAY_TIME)
    return marker
}

/**
 * Function used in callback to display farmers
 * markets on a leaflet map
 *
 * @param {object} data - GeoJSON result from successful call
 */
var displayFarmersMarkets = function(data) {
    L.geoJson(data,{
        pointToLayer: createMarker
    }).addTo(map);
}

$.getJSON(farmersMarketsURL, displayFarmersMarkets);
