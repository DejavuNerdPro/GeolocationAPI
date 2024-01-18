function initMap() {
    // Specify the coordinates where the map should be centered
    var myLatLng = { lat: 16.8661, lng: 96.1951 };

    // Create a new map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 13
    });

    // Create a marker and set its position
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Home'
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'Welcome to Yangon!'
    });

    // Open the info window when the marker is clicked
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    console.log("Marker : ",marker);
}