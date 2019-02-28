function initMap() {
L.mapquest.key = 'WsbGFycgToeI3LC5NZrUGyTwLxuetS3l';

	//'map' refers to a <div> element with the ID "map"
	var map = L.mapquest.map('map', {
		center: [32.878934, -117.235912],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	//add a marker to the map
	L.marker([32.878934, -117.235912]).addTo(map);
}