// Creating the map object with worldCopyJump set to false
let myMap = L.map("map", {
    center: [0, 0], // Center the map at the equator and prime meridian
    zoom: 2, // Set an initial zoom level to show the whole world
    worldCopyJump: false // Prevent the map from repeating horizontally
});

// Adding the tile layer with noWrap set to true
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        noWrap: true // Prevent the map from repeating horizontally
    }).addTo(myMap);

// Store our API endpoint as queryUrl
let URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Function to determine color based on depth using a color scale
function chooseColor(depth) {
    if (depth < 10) return "#00FF00";
    else if (depth < 30) return "green";
    else if (depth < 50) return "yellow";
    else if (depth < 70) return "orange";
    else if (depth < 90) return "red";
    else return "#FF0000";
}

// Function to create features
function createFeatures(earthquakeData) {
    // Define a function that we want to run once for each feature in the features array.
    // Give each feature a popup that describes the place and time of the earthquake.
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Date: ${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
    }

    // Create a GeoJSON layer with earthquake data
    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: feature.properties.mag * 2,
                fillColor: chooseColor(feature.geometry.coordinates[2]),
                color: "black",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.6
            });
        }
    }).addTo(myMap);
}

// Perform a GET request to the query URL
d3.json(URL).then(function (data) {
    // Console log the data retrieved
    console.log(data);
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
});
