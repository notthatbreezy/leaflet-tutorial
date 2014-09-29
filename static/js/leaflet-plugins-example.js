/**
 * Add points using the esri plugin
 *
 */

// Center on Philadelphia
var map = L.map('basic-map').setView([39.952299, -75.163256], 13);

/**
 * Add OpenStreetMap tiles to the map
 */
L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> |' +
        ' Bike Rack Data obtained from <a href="https://github.com/CityOfPhiladelphia/phl-open-geodata">' +
        'City of Philadephia</a>'
}).addTo(map);

// Function used to add popups to bikerack markers
var bikeRackMarker = function(feature, latlng) {
    var marker = L.marker(latlng);
    marker.bindPopup('<b>' + feature.properties.type + '</b><br/>' +
                     'Capacity: ' + feature.properties.capacity + '<br/>')
    return marker
}

// Empty layer that bikerack data will be added to
var bikeRacksLayer = L.geoJson(null, {
    pointToLayer: bikeRackMarker
});

// Parse bikeracks CSV
var bikeRacks = omnivore.csv('/data/bike_racks.csv',
                             null, bikeRacksLayer)
    .on('ready', function() {
        // Zoom map to extent
        map.fitBounds(bikeRacks.getBounds());

        // Create a marker cluster group
        var markers = L.markerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: 50
        });

        // Add markers to cluster group
        markers.addLayer(bikeRacks);

        // Add layer to map
        map.addLayer(markers);
    });
