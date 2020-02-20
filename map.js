
const createMap = ({ lat, lon, tile, zoom }) => {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: tile
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat]),
            zoom: zoom
        }),
        controls: [],
        // interactions: []
    })
};

const updateMap = () => {
    document.querySelector('.ol-viewport').remove();
    createMap(mapSettings);
}
