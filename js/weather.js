const API_KEY = '2da398c7892c6c8f00069ab11550dda3';

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log(position.coords);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			const weatherContainer = document.querySelector('.weather');
			const nowWeather = weatherContainer.querySelector(':first-child');
			const city = weatherContainer.querySelector(':last-child');

			const name = data.name;
			const weather = data.weather[0].main;

			nowWeather.innerHTML = weather;
			city.innerHTML = name;
		});
}

function onGeoError() {
	alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
