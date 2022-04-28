//let t = '';
//let n = 0;
//function t1() {
//    t += ++n + ' ';
//    if (n >= 30) return;
//    t1();
//}
//t1()
//console.log(t);



//function randInt(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min);
//}

//let count = 0;
//function earnMoney(had, need, min, max) {
//    let money = randInt(min, max);
//    had += money;
//    count++;
//    if (had >= need) return;
//    earnMoney(had, need, min, max)
//}
//earnMoney(0, 1000, 1, 100);
//console.log(count);


//* факторіал
//let num = 0;
//res = 1;
//function factorial(n) {
//    res *= ++num;
//    if (num >= n) return;
//    factorial(n)
//}
//factorial(5)
//console.log(res);



// Task 1
// Функция принимает число n. Напишите рекурсивную функцию r1, которая выводит числа от n до нуля в out-1. Разделитель - пробел.

function t1(n) {
    let out = '';
    r1(n);
    function r1(z) {
        if (z < 0) return;
        out += z-- + ' ';
        r1(z);
    }
    document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').addEventListener('click', () => {
    t1(5);
})




// Task 2
// Функция принимает число. Напишите рекурсивную функцию r2, которая выводит числа от 0 до введенного числа в out-2 с шагом 2. Разделитель - пробел.

function t2(n) {
    let out = '';
    r2(n);

    function r2(z) {
        if (z < 0) return;
        if (z % 2 === 1) z--;
        out += z + ' ';
        z = z - 2;
        r2(z);
    }
    document.querySelector('.out-2').innerHTML = out.split('').reverse().join('');
}

document.querySelector('.b-2').addEventListener('click', () => {
    t2(5);
})

// Task 3.
// Функция t3 принимает аргумент 'odd' или 'even' и должна возвратить четное или не четное число в диапазоне от 0 до 100. Решите задачу рекурсивно. Для генерации случайных чисел используйте функцию randomInteger.

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function t3(arg) {
    if (arg === 'even') return (randomInteger(0, 50) * 2);
    else return (randomInteger(0, 50) * 2 + 1);
}

document.querySelector('.b-3').addEventListener('click', () => {
    document.querySelector('.out-3').textContent = t3('even');
});

// Task 4.
// Функция t4 с помощью randomInteger генерирует случайное число от 0 до 10 и проверяет его наличие в массиве ar4. Если число уже есть - выполняет генерацию заново. Если нет - возвращает это число.

let ar4 = [3, 4, 6, 7, 8];

function t4() {
    let r = randomInteger(0, 10);
    isInclude();
    return r;

    function isInclude() {
        if (!ar4.includes(r)) return;
        r = randomInteger(0, 10);
        isInclude();
    }
}

document.querySelector('.b-4').addEventListener('click', () => {
    document.querySelector('.out-4').textContent = t4();
});

// Task 5.
// Напишите рекурсивную функцию t5, которая генерирует целое число от 0 до 10 ( с помощью randomInteger) и добавляем его в массив ar5. Проверяет, если сумма элементов массива больше 30 - то прекращает свою работу, если меньше - запускается заново. Возвращает массив ar5 по результату работы.

let ar5 = [];

function t5() {
    let r = randomInteger(0, 10);
    let sum;
    ar5 = [];
    sumFunc()
    return ar5;

    function sumFunc() {
        ar5.push(r);
        sum = ar5.reduce((acc, item) => acc + item);
        if (sum > 30) return;
        r = randomInteger(0, 10);
        sumFunc();
    }
}

document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').textContent = t5();
});

// Task 6.
// Напишите рекурсивную функцию t6, которая вытаскивает из массива ar6 числа в массив ar6_res. 

let ar6 = [
    5,
    [3, 4, 'h'],
    [[5, 6, 'b'], ['c', 7, [8]]],
    9,
    [[[[[10, 'i', 11, [12]]]]]]
];
let ar6_res = [];

//console.log(ar6[0].length);

function t6(arr) {
    for (let key in arr) {
        if (Array.isArray(arr[key])) t6(arr[key]);
        else {
            if (typeof arr[key] === 'number') ar6_res.push(arr[key]);
        }
    }
}

document.querySelector('.b-6').addEventListener('click', () => {
    t6(ar6);
    document.querySelector('.out-6').textContent = ar6_res;
});


// Task 7.
// Напишите рекурсивную функцию t7, которая вытаскивает из массива ar7 все строки в ar7_res. 

let ar7 = [
    'hi',
    ['hii'],
    [['hiii']],
    [[['hiiii']]],
    ['i', [[[[[['hi']]]]]]]
];
let ar7_res = [];

function t7(arg) {
    for (let item of arg) {
        if (Array.isArray(item)) t7(item);
        else {
            if (typeof item === 'string') ar7_res.push(item);
        }
    }
}

document.querySelector('.b-7').addEventListener('click', () => {
    t7(ar7);
    document.querySelector('.out-7').textContent = ar7_res;
});


// Task 8.
// Напишите рекурсивную функцию t8, которая получает с помощью randomInt целое число от 1000 до 9000 и проверяет если сумма первых двух цифр числа равна сумме 3 и 4 числа то возвращает это число. Если нет - повторяет операцию. Например число 1235 не удовлетворяет этому условию, потому что 1+2 не равно 3+5. А вот число 7180  - удовлетворяет.

function t8() {
    let num = randomInteger(1000, 9000);
    console.log(num);
    let numArr = num.toString().split('');
    if ((Number(numArr[0]) + Number(numArr[1])) === (Number(numArr[2]) + Number(numArr[3]))) {
        return num;
    }
    else {
        return t8();
    };
}

document.querySelector('.b-8').addEventListener('click', () => {

    document.querySelector('.out-8').textContent = t8();
});


// Task 9.
// Напишите рекурсивную функцию t9, которая создает массив ar9_res состоящий из возраста (age) пользователей прописанных в ar9. 

let ar9 = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    },
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {

            },
            "sniezko": {
                age: 45
            }
        }
    }
}

let ar9_res = [];

function t9(obj) {
    for (let key in obj) {
        if (key === 'age') ar9_res.push(obj[key]);
        else if (typeof obj[key] === 'object') t9(obj[key]);
    }
}

document.querySelector('.b-9').addEventListener('click', () => {
    for (let key in ar9) {
        t9(ar9[key]);
    }
    document.querySelector('.out-9').innerHTML = ar9_res;
});

// Task 10.
// Напишите рекурсивную функцию t10, которая создает массив ar10_res фамилии людей у которых нет информации о возрасте.

let ar10 = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45,
                parent: {}
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    },
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {
                parent: {
                    "sidorenko": {}
                }
            },
            "sniezko": {
                age: 45
            }
        }
    }
}

let ar10_res = [];

function t10(k, obj) {
    for (let key in obj) {
        if (key === 'age') ar10_res.push(k);
        else if (typeof obj[key] === 'object') t10(key, obj[key]);
    }
}

document.querySelector('.b-10').addEventListener('click', () => {
    for (let key in ar10) {
        t10(key, ar10[key]);
    }
    document.querySelector('.out-10').innerHTML = ar10_res;
});

