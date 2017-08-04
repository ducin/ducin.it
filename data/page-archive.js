// full jsfiddle demo: http://jsfiddle.net/ug4trmy1/

const $map = document.getElementById('map-canvas');
const latlng = (lat, lng) => new google.maps.LatLng(lat, lng);

const markerTpl = item => `<div class="marker">
<h3>${item.venue.name}</h3>
<h4>${item.venue.city}, ${item.venue.countryCode}</h4>
<div><ul>
  <li><i>${item.title}</i> at ${item.event}</li>
</ul></div>
</div>`;

const initMap = () => {
  const map = new google.maps.Map($map, {
    zoom: 4,
    center: latlng(50, 10),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  let theOnlyWindow = null;

  function addMarker(item) {
    const marker = new google.maps.Marker({
      position: latlng(item.venue.latitude, item.venue.longitude),
      map: map,
      title: item.title
    });

    if (item.venue.latitude && item.venue.longitude) {
      const infoWindow = new google.maps.InfoWindow({
        content: markerTpl(item)
      });

      marker.addListener('mouseover', function() {
        if (theOnlyWindow) {
          theOnlyWindow.close();
        }
        infoWindow.open(map, marker);
        theOnlyWindow = infoWindow;
      });
    }
  };

  const events = require('./data.json');
  events.forEach(addMarker);
}

initMap();
