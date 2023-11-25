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

