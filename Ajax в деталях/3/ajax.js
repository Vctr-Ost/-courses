function getWeather(cityId, func) {
	$.ajax(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=15aec451c2befee6a8fdea3570dca4ab`, {
		success: func
	});
}


//703448 - kyiv
//706483 - kharkiv
//702550 - lviv
