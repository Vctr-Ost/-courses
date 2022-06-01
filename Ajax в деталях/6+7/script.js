let getTaskBtn = document.querySelector('.getTask');
let setTaskBtn = document.querySelector('.setTask');
let resUl = document.querySelector('.inner');

getTaskBtn.addEventListener('click', () => {
	const promise = getTasks();
	promise.then(showTasks)
})

setTaskBtn.addEventListener('click', () => {
	const promise = setTask('Lets go!!!');
	promise.then(adddTasks);
})

function showTasks(data) {
	resUl.innerHTML = '';
	data.forEach(el => {
		let li = document.createElement('li');
		li.innerHTML = el.title;
		resUl.append(li);
	});
}

function adddTasks(data) {
	let li = document.createElement('li');
	li.innerHTML = data.task.title;
	resUl.append(li);
}





// https://repetitora.net/api/JS/Tasks?widgetId=12345
