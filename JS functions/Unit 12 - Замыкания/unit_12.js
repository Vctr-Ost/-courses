//let a = 10;
//function f1() {
//    console.log(a);
//}
//f1()

//function step() {
//    let count = 0;
//    return function () {
//        console.log(++count);
//    }
//}
//let k = step();     // Создается область видимости функции step
//let i = step();
//k();
//k();
//i();
//i();




//function randInt(min, max) {
//    let num = Math.floor(Math.random() * (max - min + 1) + min);
//    return num;
//}

//function begar() {
//    let sum = 0;
//    return function f1() {
//        if (sum >= 250) return;             // Рекурсия с замыканием
//        sum += randInt(1, 200);
//        console.log('sum: ' + sum);
//        f1();
//    }
//}

//let money = begar();
//money();




// Task 1
// Напишите анонимную функцию применяя замыкание. Внутри функции создайте переменную равную 75, и повесьте на кнопку .b-1 событие клик и функцию, которая увеличивает переменную на 1 и присваивает блоку .out-1 ширину равную переменной + 'px'. Анонимная функция замыкание должна запускаться при загрузке файла.
(function () {
    let w = 75;
    document.querySelector('.b-1').onclick = function () {
        w++;
        document.querySelector('.out-1').style.width = w + 'px';
    }
})();

// тут прописываете запуск

// Task 2
// Усложним предыдущую задачу. Создайте анонимную функцию замыкание, в которой создайте переменные w = 75 и h = 30. Создайте две функции, одна запускается при клике на кнопку .b-2-1 и увеличивает ширину блока .out-2, вторая запускается при клике на кнопку .b-2-2 и увеличивает высоту блока .out-2. Анонимная функция замыкание должна запускаться при загрузке файла.

(function () {
    let w = 75;
    let h = 30;
    document.querySelector('.b-2-1').addEventListener('click', wPlus);
    document.querySelector('.b-2-2').addEventListener('click', hPlus);
    function wPlus() {
        w++;
        document.querySelector('.out-2').style.width = w + 'px';
    }
    function hPlus() {
        h++;
        document.querySelector('.out-2').style.height = h + 'px';
    }
})();


// Task 3.
// В скобках напишите код функции замыкания, которая создает переменную count = 0 и возвращает анонимную функцию, которая в свою очередь увеличивает count на 1 и возвращает его.

let count3 = (function () {
    let count = 0;
    return () => {
        return ++count;
    }
})();
//console.log(count3());
//console.log(count3());
//console.log(count3());


// Task 4
// Напишите функцию замыкание createCount. Внутри функции создайте count равный переданному в createCount аргументу ( по умолчанию равен 0) и сделайте return функции, которая увеличивает count на 1 и возвращает его.

function createCount(num) {
    let count = num;
    return () => {
        return ++count;
    }
};

let count4 = createCount(444);

//console.log(count4());
//console.log(count4());


// Task 5
// Напишите функцию замыкание generatePassword, которая принимает аргумент - массив символов, и содержит в себе две функции. Первая функция randomInteger(min, max) возрвщает случайное целое число в диапазоне, а вторую функцию возвращает (делает return). Данная функция, которую возвращают должна возвращать случайный символ из массива переданного функции generatePassword в качестве аргумента.

function generatePassword(arr) {
    function randomInteger(min, max) {
        let num = Math.floor(Math.random() * (max - min + 1) + min);
        return num;
    }

    return function () {
        let n = randomInteger(0, (arr.length - 1));
        return arr[n];
    }
}

let password = generatePassword(['b', 'y', 'Y', 'b', 'z']);
//console.log(password());


// Task 6
// Напишите функцию замыкание generatePassword2, которая принимает два аргумента - массив символов (arr), и длину пароля(n). Функция  содержит в себе две функции. Первая функция randomInteger(min, max) , а вторую функцию возвращает (делает return). Данная функция, которую возвращают должна возвращать строку длинной n из символов массива arr. Символы выбираются случайным образом.

function generatePassword2(arr, n) {
    function randomInteger(min, max) {
        let num = Math.floor(Math.random() * (max - min + 1) + min);
        return num;
    }

    let out = '';
    let count = 0;
    return function f1() {
        count++;
        out += arr[randomInteger(0, (arr.length - 1))];
        if (count >= n) return out;
        return f1();
    }
}

let password2 = generatePassword2(['b', 'y', 'Y', 'b', 'z'], 4);
//console.log(password2());



// Task 7
// Напишите функцию замыкание createElement, которая принимает 2 аргумента, первый название тега (elem), второй текст в теге (text). Функция createElement должна возвращать функцию, которая через createElement создает elem и через innerHTML добавляет в него текст. Созданный тег должен быть возвращен.

function generateElement(elem, text) {


    return function createElement() {
        let e = document.createElement(elem);
        e.innerHTML = text;
        return e;
    }
}

let divCreator = generateElement('div', 'hello');
let spanCreator = generateElement('span', 'hi');
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(spanCreator());
document.querySelector('.out-7').append(spanCreator());

// Task 8
//  Напишите функцию замыкание createElement2, которая принимает 1 аргумент -  название тега (elem). Функция createElement2 должна возвращать функцию, которая через createElement создает elem и через innerHTML добавляет в него текст переданный в данную функцию как аргумент text. Созданный тег должен быть возвращен.

function generateElement2(elem) {
    let k = document.createElement(elem);
    return function (t) {
        k.innerHTML = t;
        return k;
    }
}

let divCreator2 = generateElement2('div');
let spanCreator2 = generateElement2('span');
document.querySelector('.out-8').append(divCreator2('ex1'));
document.querySelector('.out-8').append(divCreator2('ex2'));
document.querySelector('.out-8').append(spanCreator2('ex3'));
document.querySelector('.out-8').append(spanCreator2('ex4'));

// Task 9
// Напишите функцию замыкание generateDay, внутри которой создан массив days с именами дней недели и return анонимной функции, которая получает аргумент n и возвращает days[n-1] день недели.

function generateDay() {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    return function (n) {
        return days[n - 1];
    };
}

const day = generateDay();
//console.log(day(2))
//console.log(day(3))



// Task 10
// Напишите функцию замыкание generateMonth, внутри которой создан массив month с именами дней недели и return анонимной функции, которая получает аргумент n и возвращает month[n-1] день недели.

function generateMonth() {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return function (n) {
        return month[n-1];
    }
}
const month = generateMonth();
//console.log(month(2));
//console.log(month(3));

