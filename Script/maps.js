function initMap() {
    var myPlace = { lat: 43.819832, lng: -79.350891 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 14, center: myPlace });
    var marker = new google.maps.Circle({
        strokeColor: '#1A7DFC',
        strokeOpacity: 0.7,
        strokeWeight: 2,
        fillColor: '#1AADFC',
        fillOpacity: 0.25,
        map: map,
        center: map.getCenter(),
        radius: 325,
    });
}