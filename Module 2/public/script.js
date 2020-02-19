const button = document.getElementById('button');
button.addEventListener('click', () => {
	geolocationData();
});

function geolocationData() {
	if ('geolocation' in navigator) {

		navigator.geolocation.getCurrentPosition((position) => {
			var lat = position.coords.latitude.toFixed(2);
			var long = position.coords.longitude.toFixed(2);
			document.getElementById('latitude').textContent = lat
			document.getElementById('longitude').textContent = long;

			var data = { lat, long };
			
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