let inputCityID = document.querySelector('.input');


document.querySelector('.btn1').addEventListener('click', () => {
	getWeather(inputCityID.value, callBackFunc);
})

function callBackFunc(data) {
	console.log(data.name + ' - ' + Math.round(data.main.temp - 273) + 'grad');
}




//703448 - kyiv
//706483 - kharkiv
//702550 - lviv
