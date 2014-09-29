/**
 * Initialize the map on the page
 *   - need an empty div with an id to insert map into
 *   - setView centers the map on coordinates (Philly City Hall)
 */
var map = L.map('basic-map').setView([39.952299, -75.163256], 13);

/**
 * Add OpenStreetMap tiles to the map
 *
 * There are many open-source, freely available tiles
 * for leaflet.
 *   See: http://leaflet-extras.github.io/leaflet-providers/preview/
 *
 */
L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(map);
