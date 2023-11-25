"use strict";
let studentInfo = {
    name: 'miirshe',
    id: 'c120868',
    classNo: 'ca205'
};
console.log('studentInfo : ', studentInfo);
console.log('student name : ', studentInfo.name);
function student_info(student) {
    for (let key in student) {
        console.log(`${key} : ${student[key]}`);
    }
}
student_info(studentInfo);
let student = [studentInfo].map(student => {
    return student;
});
console.log(student);
let person_info = {
    name: 'miirshe',
    age: 23,
    address: 'xamar jajab',
    phone: 618302314
};
console.log(person_info);
console.log(person_info.name);
function personInfo(person) {
    for (let key in person)
        [
            console.log(`${key} : ${person[key]}`)
        ];
}
personInfo(person_info);
class PersonData {
    constructor(name, age, phone, gender, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.gender = gender;
        this.address = address;
    }
}
const personData = new PersonData('miirshe', 23, 618302314, 'male', 'xamar jajab');
console.log(personData);
console.log(personData.name);
function person_data(person) {
    for (let key in person) {
        console.log(`${key} : ${person[key]}`);
    }
}
person_data(personData);
