// Function to initialize the map
function initMap() {
    // Create a map centered at a default location
    var map = L.map('map').setView([0, 0], 2);

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add geolocation control to the map
    map.addControl(L.control.locate());

    // Listen for the locationfound event and add a marker at the found location
    map.on('locationfound', function (e) {
        var marker = L.marker(e.latlng).addTo(map);
        marker.bindPopup("You are here!").openPopup();
    });

    // Listen for locationerror event and log the error to the console
    map.on('locationerror', function (e) {
        console.error("Error getting location:", e.message);
    });
}

// Call the initMap function when the DOM is ready
document.addEventListener('DOMContentLoaded', initMap);
