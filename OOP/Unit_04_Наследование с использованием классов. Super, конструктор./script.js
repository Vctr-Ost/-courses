let array = ['one', 'two', 'three', 'four'];


let listStr1 = new List(array);
document.querySelector('body').append(listStr1.render());


let listStr2 = new List2(array, 'cssclas1');
document.querySelector('body').append(listStr2.render());


let arrCSS = ['text-center', 'bold', 'text-red'];
let listStr3 = new List3(array, arrCSS);
document.querySelector('body').append(listStr3.render());