let x = document.getElementById('Output');

function geoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }   else {
        x.innerHTML = "Geolocation isn't supported in the browser";
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    x.innerHTML = "Lat " + lat + " | Long " + long
}