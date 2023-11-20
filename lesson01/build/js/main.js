"use strict";
let my_name = "miirshe";
let my_age = 23;
let male = true;
function myProfile() {
    console.log(`my name : ${my_name}\nmy_age: ${my_age}\ngender: ${male}`);
}
myProfile();
function addNumbers(num1, num2) {
    return num1 + num2;
}
let num1 = 20;
let num2 = 30;
let total = addNumbers(num1, num2);
console.log(`The total: ${total}`);
function constantColors() {
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Blue"] = 1] = "Blue";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Yellow"] = 3] = "Yellow";
    })(Color || (Color = {}));
    let Colors = Color.Blue;
    console.log(`Color : ${Colors}`);
}
constantColors();
function myInfo() {
    let person = {
        fullName: "abdikafi isse isak",
        age: 23,
        gender: "male",
        phone: 618302314,
    };
    console.log('person', person.fullName);
}
myInfo();
function myFruit(fruits) {
    fruits.forEach(element => {
        console.log(element);
    });
}
const myFruits = ["apple", "banana", "orange"];
myFruit(myFruits);
function oddNumbers(numbers) {
    let i = 1;
    while (i <= numbers.length) {
        if (numbers[i] % 2 != 0) {
            console.log('odd numbers : ', numbers[i]);
        }
        i++;
    }
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
oddNumbers(numbers);
