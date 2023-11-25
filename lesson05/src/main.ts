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

