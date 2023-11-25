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
