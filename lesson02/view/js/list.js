"use strict";
// odd numbers 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = (numbers) => {
    let oddNumbers = [];
    numbers.forEach(num => {
        if (num % 2) {
            oddNumbers.push(num);
        }
    });
    console.log('odd numbers : ', oddNumbers);
};
oddNumbers(numbers);
var grade;
(function (grade) {
    grade[grade["A"] = 0] = "A";
    grade[grade["B"] = 1] = "B";
    grade[grade["C"] = 2] = "C";
    grade[grade["D"] = 3] = "D";
    grade[grade["E"] = 4] = "E";
})(grade || (grade = {}));
const studentMarks = () => {
    let losingMarks = 0;
    let total = 0;
    let average = 0;
    let student_name = prompt("Enter your student name");
    let student_id = prompt("Enter your student id");
    let student_class = prompt("Enter your student class");
    let choose_subjects = prompt('Enter how many subjects you calculate ? : ');
    let i = 1;
    while (i <= Number(choose_subjects)) {
        let subject = prompt(`Enter Subject ${i} aad`);
        losingMarks += 40 - Number(subject);
        total += Number(subject);
        i++;
    }
    let grade = '';
    average = total / Number(choose_subjects);
    function calculateGrade(average, grade) {
        if (average > 35 && average <= 40) {
            return grade = 'A';
        }
        else if (average > 30 && average <= 35) {
            return grade = 'B';
        }
        else if (average > 25 && average <= 30) {
            return grade = 'C';
        }
        else if (average > 20 && average <= 25) {
            return grade = 'D';
        }
        else if (average >= 20) {
            return grade = 'F';
        }
    }
    let student_data = [];
    const student_info = {
        student_name: student_name,
        student_id: student_id,
        student_class: student_class,
        total: total,
        average: average,
        losing_mark: losingMarks,
        grade: calculateGrade(average, grade)
    };
    student_data = student_info;
    student_data.sort();
    console.log('student information : ', student_info);
};
studentMarks();
