
let a = 5;

$.ajax('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=15aec451c2befee6a8fdea3570dca4ab', {
	success: (data) => {
		console.log(data);
	}
});

a = 8;

console.log(a);