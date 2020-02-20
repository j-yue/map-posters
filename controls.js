let download = document.querySelector('.download');
let slider = document.querySelector('.slider');
let sliderValue = document.querySelector('.slider-value');
let lat = document.querySelector('#lat');
let lon = document.querySelector('#lon');

let mapTiles = document.querySelectorAll('.tile');

mapTiles.forEach(tile => tile.addEventListener('click', () => {
    document.querySelector('.active-tile').classList.remove('active-tile');
    let type = tile.classList[1];
    mapSettings.tile = tiles[type];
    tile.classList.add('active-tile');
    updateMap(mapSettings);

}))


lat.addEventListener('change', () => {
    mapSettings.lat = lat.value;
    updateMap(mapSettings);
});

lon.addEventListener('change', () => {
    mapSettings.lon = lon.value;
    updateMap(mapSettings);
});

download.addEventListener('click', function () {
    let canvas = document.querySelector('canvas');
    canvas.toBlob(blob => {
        saveAs(blob, 'map.png');
    });
});

sliderValue.innerHTML = slider.value;

slider.addEventListener('change', () => {
    let value = slider.value;
    mapSettings.zoom = value;
    sliderValue.innerHTML = value;
    updateMap(mapSettings);
})

