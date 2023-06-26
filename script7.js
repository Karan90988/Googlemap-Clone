const MAPBOX_ACCESS_TOCKEN = 'pk.eyJ1Ijoia2FyYW45MDk4OCIsImEiOiJjbGl5aGg4cHAwODFqM2xzOXc5NnJmZWM5In0.oe2KjXZGawGM_iUQi0MUOg'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})


function setupMap(centerPosition) {
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOCKEN,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerPosition,
        zoom: 15,

    });

    const navigationControls = new mapboxgl.NavigationControl();
    map.addControl(navigationControls)

    const directionControls = new MapboxDirections({
        accessToken: MAPBOX_ACCESS_TOCKEN
    })

    map.addControl(directionControls, 'top-left')

}


function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])

}

function errorLocation() {
    setupMap([-2.24, 53.48])
}