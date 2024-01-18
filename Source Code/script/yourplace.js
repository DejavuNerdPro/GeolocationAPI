function initMap(){

    // Specify the coordinates where the map should be centered
    var myLatLng = { lat: 16.8661, lng: 96.1951 };

    // Create a new map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 13
    });

    // check if browser support geolocation
    if(navigator.geolocation){
        console.log('Brownser provides Geolocation.');

        //get the current location
        navigator.geolocation.getCurrentPosition(function(position){
            var currentLocation={
                lat:position.coords.latitude,
                lng:position.coords.longitude
            };
            console.log("CurrentLocation : ",currentLocation);
            map.setCenter(currentLocation);
            
            //set marker
            var marker=new google.maps.Marker({
                position:currentLocation,
                map:map,
                title:'Your location'
            });

            //info window
            var infowindow=new google.maps.InfoWindow({
                content:'Your Place'
            });

            marker.addListener('click',function(){
                infowindow.open(map,marker);
            });
        },function(){
            var infowindow=new google.maps.InfoWindow({
                map:map
            });
            browserHasGeolocation=true;
            infowindow.setPosition(map.getCenter());
            infowindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
        
        });
    }else{
        var infowindow=new google.maps.InfoWindow({
            map:map
        });
        browserHasGeolocation=false;
        infowindow.setPosition(map.getCenter());
        infowindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    
    }
}

//handle Error
function handleError(browserHasGeolocation,position){
    }