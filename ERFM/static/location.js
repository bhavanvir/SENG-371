var map = null
var homeLon;
var homeLat;

navigator.geolocation.getCurrentPosition(function(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;

    // Send the latitude and longitude values to a view function in your Django application using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '?lon=' + lon + '&lat=' + lat, true);
    xhr.onload = function() {
        // Display the hospital list returned by the server
        var panel = document.getElementById('panel');
        panel.innerHTML = xhr.responseText;
    };
    xhr.send();
    
    map = initializeMap(lon, lat);
    //console.log(map.size);
    homeMarker = 'https://openlayers.org/en/latest/examples/data/geolocation_marker.png'
    addMarkerToMap(lon, lat, map, homeMarker);
    //map.getView().setCenter(ol.proj.fromLonLat(['-123.3290759', '48.4337391']));
    homeLon = lon;
    homeLat = lat;
});

/*  
    Adjusts map view to a selected location and adds a marker to it
    Params: lon -- selected longitude
            lat -- selected latitute
*/
function adjustMap(lon, lat){
    map.setView(new ol.View({
        center: ol.proj.fromLonLat([lon, lat]),
        zoom: 17
      }));
    hospitalMarker = 'https://media.discordapp.net/attachments/614629290889314455/1095659099007492197/hospital-icon.png'
    addMarkerToMap(lon, lat, map, hospitalMarker);
}

function goHome(){
    map.setView(new ol.View({
        center: ol.proj.fromLonLat([homeLon, homeLat]),
        zoom: 17
      }));
}