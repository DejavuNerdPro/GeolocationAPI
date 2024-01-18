// Function to initialize the map
function initMap() {
    // Specify the coordinates where the map should be centered
    var myLatLng = { lat: -34.397, lng: 150.644 };

    // Create a new map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 8
    });

    // Create a marker and set its position
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}