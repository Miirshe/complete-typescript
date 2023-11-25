interface studentKeys {
	name:string,
	id : string,
	classNo:string
}

let studentInfo : studentKeys = {
	name : 'miirshe',
	id : 'c120868',
	classNo : 'ca205'
}

console.log('studentInfo : ',studentInfo);
console.log('student name : ',studentInfo.name);

function student_info (student:studentKeys):void{
	for (let key in student){
		console.log(`${key} : ${student[key as keyof studentKeys]}`);	
	}
}

student_info(studentInfo);

let student = [studentInfo].map(student => {
	return student
})

console.log(student);


interface Person{
	[index:string] : string | number | boolean | undefined,
	address : string
}

let person_info : Person = {
	name : 'miirshe',
	age:23,
	address : 'xamar jajab',
	phone:618302314
}

console.log(person_info);
console.log(person_info.name);

function personInfo(person:Person):void{
	for(let key in person)[
		console.log(`${key} : ${person[key]}`)
	]
}

personInfo(person_info);


class PersonData implements Person {
	[index: string]: string | number | boolean | undefined;
	name: string;
	age: number;
	phone: number;
	gender: string;
	address: string;
  
	constructor(
	  name: string,
	  age: number,
	  phone: number,
	  gender: string,
	  address: string
	) {
	  this.name = name;
	  this.age = age;
	  this.phone = phone;
	  this.gender = gender;
	  this.address = address;
	}
  }
  
  const personData = new PersonData(
	'miirshe',
	23,
	618302314,
	'male',
	'xamar jajab'
  );
  console.log(personData);
  console.log(personData.name);

function person_data(person : Person):void{

	for(let key in person){
		console.log(`${key} : ${person[key]}`);
	}
}

person_data(personData);


interface studentObj{
	[index:string] : string | number | null | undefined | boolean | void
}

class StudentInfo implements studentObj{
	[index: string]: string | number | boolean | null | undefined;
	name : string;
	age : number;
	gender : string;
	constructor(
		name : string , 
		age: number , 
		gender: string){
		this.name = name;
		this.age = age;
		this.gender = gender
	}

}

class Student_marks extends StudentInfo{
	somali : number;
	english : number;
	math : number;

	constructor(
		name : string , 
		age: number , 
		gender: string,
		somali : number, 
		english : number,
		math : number){
		super(name , age , gender);
		this.somali = somali;
		this.english = english;
		this.math = math
	}

    static calculateMarks(
		somali : number, 
		english : number,
		math : number
	):void {
		enum grade {
			A = "A",
			B = "B",
			C = "C",
			D = "D",
			F = "F"
		}
		interface marks{
			somali : number,
			english : number,
			math : number
		}
		
		let subjectMarks : marks = {
			somali :somali,
			english : english,
			math : math
		}
		let total : number = 0 ;
		for(let key in subjectMarks){
			total += subjectMarks[key as keyof marks]
		}

		let average : number = total/[subjectMarks].length;

		if(average > 90 && average <= 100){
			console.log(`${total}\n${average}\n${grade.A}`);
		}else if(average > 80 && average <= 90){
			console.log(`${total}\n${average}\n${grade.B}`);
		}else if(average > 70 && average <= 80){
			console.log(`${total}\n${average}\n${grade.C}`);
		}else if(average > 60 && average <= 70){
			console.log(`${total}\n${average}\n${grade.D}`);
		}else if(average > 50 && average <= 60){
			console.log(`${total}\n${average}\n${grade.F}`);
		}
	}
}

let studentResultExam = new Student_marks(
	'miirshe',
	23,
	'male',
	100,
	100,
	98
)

console.log(studentResultExam);


Student_marks.calculateMarks(100,100,98)

