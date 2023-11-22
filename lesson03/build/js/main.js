"use strict";
// today we cover function , array , enum , interfaces and type aliases
// return value function
const sumAll = function (num1, num2) {
    return num1 + num2;
};
const sum = sumAll(10, 20);
console.log(`the sum : ${sum}`);
// return void function 
function evenNumber(numbers) {
    let evenNums = [];
    numbers.forEach(num => {
        if (num % 2 == 0) {
            evenNums.push(num);
        }
    });
    console.log(`The even number : [${evenNums}]`);
}
evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
// default parameter
function multiply(num1, num2 = 20) {
    return num1 * num2;
}
console.log(`default parameter function : ${multiply(10)}`);
// rest parameter
function sumNumArr(...num) {
    return num.reduce((prev, curr) => prev + curr);
}
console.log(sumNumArr(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// prive number 
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
function primeNumbers(num) {
    let numbers = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            numbers.push(i);
        }
    }
    console.log(`The Prime numbers are : ${numbers}`);
}
primeNumbers(100);
function isNotPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return true;
        }
    }
}
function nonePrimeNumbers(num) {
    let numbers = [];
    let i = 2;
    for (let i = 2; i <= num; i++) {
        if (isNotPrime(i)) {
            numbers.push(i);
        }
    }
    console.log(`The None Prime numbers are : ${numbers}`);
}
nonePrimeNumbers(100);
