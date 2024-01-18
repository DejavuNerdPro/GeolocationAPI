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

    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(16.74, 96.04),
        new google.maps.LatLng(16.77,96.07)
    );
    map.fitBounds(bounds);
    

     // Create a DrawingManager and set its options
     var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'polygon', 'polyline']
        },
        markerOptions: {
            icon: 'https://maps.google.com/mapfiles/ms/micons/blue.png'
        },
        polygonOptions: {
            fillColor: '#2196F3',
            fillOpacity: 0.5,
            strokeWeight: 2,
            clickable: true,
            editable: true
        },
        polylineOptions: {
            strokeColor: '#2196F3',
            strokeWeight: 2,
            clickable: true,
            editable: true
        }
    });

    drawingManager.setMap(map);

    console.log("Drawing Manager : ",drawingManager);

    // Event listener for when an overlay is completed
    google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
        if (event.type == google.maps.drawing.OverlayType.MARKER) {
            // Handle marker
            var marker = event.overlay;
            console.log("Marker : ",marker);
        } else if (event.type == google.maps.drawing.OverlayType.POLYGON) {
            // Handle polygon
            var polygon = event.overlay;
            console.log("Polygon : ",polygon);
        } else if (event.type == google.maps.drawing.OverlayType.POLYLINE) {
            // Handle polyline
            var polyline = event.overlay;
            console.log("polyline : ",polygonOptions);
        }
    });
}
