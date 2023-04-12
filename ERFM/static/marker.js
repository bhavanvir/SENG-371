function addMarkerToMap(lon, lat, map, markerSource) {

    layers = map.getAllLayers();
    if(layers.length >= 2){
        map.removeLayer(layers[2]);
    }

    // Add a marker to the map
    var marker = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([lon, lat])
        )
    });
    
    var markerLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [marker]
        }),
        style: new ol.style.Style({
            image: new ol.style.Icon({
                src: markerSource
            })
        }),
        zIndex: 1
    });
    
    map.addLayer(markerLayer);
}