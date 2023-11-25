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
class StudentInfo {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
class Student_marks extends StudentInfo {
    constructor(name, age, gender, somali, english, math) {
        super(name, age, gender);
        this.somali = somali;
        this.english = english;
        this.math = math;
    }
    static calculateMarks(somali, english, math) {
        let grade;
        (function (grade) {
            grade["A"] = "A";
            grade["B"] = "B";
            grade["C"] = "C";
            grade["D"] = "D";
            grade["F"] = "F";
        })(grade || (grade = {}));
        let subjectMarks = {
            somali: somali,
            english: english,
            math: math
        };
        let total = 0;
        for (let key in subjectMarks) {
            total += subjectMarks[key];
        }
        let average = total / [subjectMarks].length;
        if (average > 90 && average <= 100) {
            console.log(`${total}\n${average}\n${grade.A}`);
        }
        else if (average > 80 && average <= 90) {
            console.log(`${total}\n${average}\n${grade.B}`);
        }
        else if (average > 70 && average <= 80) {
            console.log(`${total}\n${average}\n${grade.C}`);
        }
        else if (average > 60 && average <= 70) {
            console.log(`${total}\n${average}\n${grade.D}`);
        }
        else if (average > 50 && average <= 60) {
            console.log(`${total}\n${average}\n${grade.F}`);
        }
    }
}
let studentResultExam = new Student_marks('miirshe', 23, 'male', 100, 100, 98);
console.log(studentResultExam);
Student_marks.calculateMarks(100, 100, 98);
