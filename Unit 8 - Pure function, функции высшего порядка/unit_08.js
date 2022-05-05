//function squad(n) {             // PURE FUNCTION - Чистая
//    return n**2;
//}
//console.log(squad(4));
//console.log(squad(4));
//console.log(squad(-4));


//function NOsquad(n) {
//    document.querySelector('.pure').textContent = n;        // Изменяет ДОМ. НЕ чистая функция
//}
//NOsquad(123456789);


//let count = 0;                // НЕ чистая функция
//function myCount() {            // Берет елементы за функцией
//    console.log(++count);       // НЕ одинаковый результат
//}
//myCount();
//myCount();


//function randomInt(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min);
//}
//console.log(randomInt(10, 20));
//console.log(randomInt(10, 20));


//function year(day) {
//    return 2021-day;
//}
//console.log(year(2000));


//* Функции высшего порядка
//function hello() {
//    console.log(hello);
//}
//hello.hi = 123;
//console.log(hello.hi);


//function pOdd() {
//    console.log('odd');
//}
//function pEven() {
//    console.log('even');
//}
//function muNumber(num, oddFunc, evenFunc) {
//    if (num % 2 === 0) return evenFunc;
//    return oddFunc;
//}
//let k = muNumber(5, pOdd, pEven);
//k();



//const arr = [
//    {name: 'Ivan', age: 27},
//    {name: 'Maxim', age: 34},
//    {name: 'Bohdan', age: 18},
//];

//let newArr = w.filter(item => item.age > 26);
//console.log(newArr);

//let newArr = arr.filter(mySort);
//function mySort(item) { return item.age > 26 ? true : false }
//console.log(newArr);







// Task 1
// Напишите pure функцию t1, которая принимает два аргумента и выводит в .out-1 cумму всех целых чисел от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1.

function t1(min, max) {
    let out = 0;
    for (let i = min; i <= max; i++) {
        out += i;
    }
    return out;
}

document.querySelector('.b-1').addEventListener('click', function () {
    document.querySelector('.out-1').textContent = t1(1, 5);
})




// Task 2
// Напишите pure функцию t2, которая принимает два аргумента и выводит в .out-2 больше число. Используйте Math.max. Функция запускается по кнопке .b-2.

function t2(a, b) {
    return Math.max(a, b);
}

document.querySelector('.b-2').addEventListener('click', () => {
    document.querySelector('.out-2').textContent = t2(22, 20);
})

// Task 3.
// Напишите pure функцию t3 ( принимает 3 аргумента), которая делит число a на b и результат выводит в out-3. Если b равно нулю, то в out-3 выводится аргумент c. Функция запускается по кнопке .b-3.

function t3(a, b, c) {
    if (b === 0) return c;
    return a / b;
}

document.querySelector('.b-3').addEventListener('click', () => {
    document.querySelector('.out-3').textContent = t3(12, 0, 1000);
})

// Task 4
// Давайте напишем pure функцию t4, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Функция запускается по кнопке .b-4.

function t4(arr, block) {
    document.querySelector(block).textContent = arr.join(' ');
}
document.querySelector('.b-4').addEventListener('click', () => {
    let arr = [1, 5, 7, 9, 6, 3];
    t4(arr, '.out-4');
})

// Task 5
// Давайте напишем pure функцию t5, которая проверяет наличие элемента класс которой передан ей как аргумент (например '.out-5') на странице и возвращает true или false. Функция запускается по кнопке .b-5.

function t5(el, cl) {
    return el.classList.contains(cl);
}

document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').innerHTML = t5(document.querySelector('.out-5'), 'out-52');
})

// Task 6
// Давайте напишем pure функцию t6, которая получает массив и возвращает его развернутым на 180 градусов ( чистый аналог reverse ). Функция запускается по кнопке .b-6. Для проверки - выводите результат на страницу, через пробел.

function t6(arr) {
    let out = [];
    arr.forEach(item => {
        out.unshift(item);
    })
    return out;
}

document.querySelector('.b-6').addEventListener('click', () => {
    document.querySelector('.out-6').innerHTML = t6([1, 2, 3, 4, 5, 6]);
})

// Task 7
// Давайте напишем функцию t7, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Ваша задача модицифировать функцию и запуск так, чтобы она стала pure.

const out7 = document.querySelector('.out-7');

function t7(block, text) {
    document.querySelector(block).innerHTML = text.trim();
}

document.querySelector('.b-7').addEventListener('click', function () {
    t7('.out-7', ' HelLO wORLd       ');
})


// Task 8
// Давайте напишем pure функцию t8, которая получает массив a8 и год year и проверяет что все года массива больше или равны year - возвращает true, false. Запускатеся при нажатии t8. Результат работы должен быть виден в out-8.

let a8 = [1998, 2000, 1991, 2002, 2005];
let year = 1998;

function t8(arr, min) {
    return arr.every(item => item >= min)
}
document.querySelector('.b-8').addEventListener('click', () => {
    document.querySelector('.out-8').innerHTML = t8(a8, year);
})

// Task 9
// Метод push мутирует массив. Давайте напишем pure функцию t9 которая принимает массив и число в качестве аргумента и возвращает новый массив равный исходному с добавленным в него числом ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-9. Для проверки - выводите результат на страницу через пробел.

function t9(arr, num) {
    arr.push(num);
    return arr;
}
document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').innerHTML = t9([1, 2, 3], 111);
})

// Task 10
// Метод push мутирует массив. Давайте напишем pure функцию t10 которая принимает массив и любое количество чисел в качестве аргументов и возвращает новый массив равный исходному с добавленными в него числами ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-10. Для проверки - выводите результат на страницу через пробел. 

function t10(arr, ...nums) {
    arr = arr.concat(nums);
    return arr;
}
document.querySelector('.b-10').addEventListener('click', () => {
    document.querySelector('.out-10').innerHTML = t10([1, 2, 3], 111, 121, 131, 141);
})