"use strict";
let fullName = { firstName: 'abdikafi', lastName: 'isse' };
console.log(fullName);
const myAge = 23;
console.log(myAge);
const my_info = (my_name, my_age) => {
    console.log(`my name : ${my_name}\nmy age : ${my_age}`);
};
my_info('miirshe', 23);
const myRectangle = (length, width) => length * width;
console.log(`area of rectangle : ${myRectangle(10, 20)}`);
const myPersonal = {
    name: 'miirshe',
    gender: 'male',
    age: 23
};
console.log(myPersonal);
let aboutMe = {
    name: 'abdikafi isse',
    email: 'miirshe@gmail.com',
    age: 23,
    gender: 'male',
    bio: 'I`m software engineer',
    phone: 618302314
};
console.log(aboutMe);
class Data {
    constructor(data) {
        this.data = data;
    }
    get getData() {
        return this.data;
    }
    set setData(data) {
        this.data = data;
    }
}
const data = new Data(aboutMe);
console.log(data.getData);
const simpleData = data.getData;
function myData(person) {
    return person.map((res, key) => res);
}
console.log(simpleData);
