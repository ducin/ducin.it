// full jsfiddle demo: http://jsfiddle.net/ug4trmy1/

const $map = document.getElementById('map-canvas');
const latlng = (lat, lng) => new google.maps.LatLng(lat, lng);

const initMap = () => {
  const map = new google.maps.Map($map, {
    zoom: 4,
    center: latlng(50, 10),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  function addMarker(item) {
    const marker = new google.maps.Marker({
      position: latlng(item.venue.latitude, item.venue.longitude),
      map: map,
      title: item.title
    });
  };

  const events = require('./data.json');
  events.forEach(addMarker);
}

initMap();
