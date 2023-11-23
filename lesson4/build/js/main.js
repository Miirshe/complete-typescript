"use strict";
class ClassNo {
    constructor(classNo) {
        this.classNo = classNo;
    }
}
class PersonalInfo extends ClassNo {
    constructor(name, address, phone, classNo) {
        super(classNo);
        this.name = name;
        this.age = 0;
        this.email = '';
        this.address = address;
        this.phone = phone;
    }
    get getAge() {
        return this.age;
    }
    set setAge(age) {
        if (typeof (age) == 'number') {
            this.age = age;
            return;
        }
        throw new Error('age params must be a number');
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        if (typeof (email) == 'string') {
            this.email = email;
            return;
        }
        throw new Error('email params must be a string');
    }
}
const person = new PersonalInfo('miirshe', 'mogadishu-somalia', 252618302314, 'CA205');
person.setAge = 21;
person.setEmail = 'miirshe@gmail.com';
console.log(person);
