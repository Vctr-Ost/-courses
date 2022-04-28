'use strict'

const user1 = {
    name: 'Ivan',
    age: 32,
    agree: true,
    pass: '12345aa',
};
const user2 = {
    name: 'Kolan',
    age: 17,
    agree: true,
    pass: '1212121',
};

function testAge(user) {
    return user.age >= 18;
}
function testPass(user) {
    return user.pass.length >= 6;
}
function testAgree(user) {
    return user.agree;
}

function validator(...tests) {
    return function (obj) {
        return tests.every(test => test(obj) === true);
    }
}

const valid1 = validator(testAge, testPass, testAgree);
console.log(`User 1: "${valid1(user1)}"`);
console.log(`User 2: "${valid1(user2)}"`);