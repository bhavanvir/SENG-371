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
    
    var map = initializeMap(lon, lat);
    addMarkerToMap(lon, lat, map)
});