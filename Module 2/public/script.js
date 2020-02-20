let video;
function setup() {

	noCanvas();
	video = createCapture(VIDEO);
	video.size(320, 240);

	const button = document.getElementById('button');
	button.addEventListener('click', () => {
		geolocationData();
	});

}

function geolocationData() {
	if ('geolocation' in navigator) {

		navigator.geolocation.getCurrentPosition((position) => {
			var lat = position.coords.latitude.toFixed(2);
			var long = position.coords.longitude.toFixed(2);
			document.getElementById('latitude').textContent = lat
			document.getElementById('longitude').textContent = long;
			video.loadPixels();
			var image64 = video.canvas.toDataURL();

			var data = { lat, long, image64 };

			var options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			};

			fetch('/api', options)
				.then(response => {
					return response.json();
				})
				.then(data => {
					console.log(data);
				})

		});

	} else {
		console.log('No Geolocation');
	}
};
