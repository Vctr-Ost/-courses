function getTasks() {
	const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=1928`);
	return promise.then((response) => {
		return response.data;
	});
}

function setTask(title) {
	const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
		widgetId: 1928,
		title: title,
	});
	return promise.then((response) => {
		return response.data;
	});
}

