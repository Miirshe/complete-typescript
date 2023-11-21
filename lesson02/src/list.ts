// odd numbers 

const numbers: number[] = [1, 2,3,4,5,6,7,8,9,10];
const oddNumbers = (numbers:number[]) => {
	let oddNumbers:number[] = [];
	numbers.forEach(num => {
		if(num % 2){
			oddNumbers.push(num);
		}
	})

	console.log('odd numbers : ',oddNumbers)
}

oddNumbers(numbers);

enum grade{
	A,
	B,
	C,
	D,
	E
}

const studentMarks = () => {
	let losingMarks:number = 0; 
	let total:number = 0;
	let average: number = 0
	let student_name:string | null = prompt("Enter your student name");
	let student_id:string | null = prompt("Enter your student id");
	let student_class:string | null = prompt("Enter your student class");
	let choose_subjects:string |null = prompt('Enter how many subjects you calculate ? : ');
	let i:number = 1;
	while(i <= Number(choose_subjects)){
		let subject:string | null = prompt(`Enter Subject ${i} aad`);
		losingMarks += 40-Number(subject);
		total += Number(subject);
		i++;
	}
	let grade: string = '';
	average = total/Number(choose_subjects);
	function calculateGrade(average :number , grade:string){
		if(average > 35 && average <= 40){
			return grade = 'A'
		}else if( average > 30 && average <= 35){
			return grade = 'B'
		}else if( average > 25 && average <= 30){
			return grade = 'C'
		}else if(average > 20 && average <= 25){
			return grade = 'D'
		}else if(average >= 20){
			return grade = 'F'
		}
	}
	let student_data: string[] | number[] = []
	const student_info:any = {
		student_name : student_name,
		student_id : student_id,
		student_class : student_class,
		total : total,
		average : average,
		losing_mark : losingMarks,
		grade : calculateGrade(average , grade)
	}
	student_data = student_info;
	student_data.sort();
	console.log('student information : ',student_info)
}
studentMarks();