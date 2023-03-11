function initializeMap(lon, lat) {
    var map = new ol.Map({
        target: 'map',
        controls: [],
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat]),
            zoom: 17
        })
    });

    return map;
}