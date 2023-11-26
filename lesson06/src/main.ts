type name<T> = {
	firstName : T,
	lastName : T
}

let fullName : name<string> = { firstName : 'abdikafi',lastName : 'isse'}
console.log(fullName);

type age<T> = T;

const myAge : age<number> = 23;
console.log(myAge);

type info<T,U> = (my_name : T , my_age :U) => void
const my_info : info<string , number> = (my_name , my_age) => {
	console.log(`my name : ${my_name}\nmy age : ${my_age}`);
	
}
my_info('miirshe',23);

type rectangle<L , W> = (length : L , width : W) => number;


const myRectangle:rectangle<number , number> = (length , width) => length * width;

console.log(`area of rectangle : ${myRectangle(10,20)}`);

type PersonalInformation<N,A> = {
	name : N,
	gender : N,
	age : A
}

const myPersonal : PersonalInformation<string,number> = {
	name : 'miirshe',
	gender : 'male',
	age : 23
}

console.log(myPersonal);


interface AboutMe<s , n>{
	name : s,
	email : s,
	age : n
	gender : s,
	bio : s,
	phone : n
}


let aboutMe :AboutMe<string , number> = {
	name : 'abdikafi isse',
	email : 'miirshe@gmail.com',
	age : 23,
	gender : 'male',
	bio : 'I`m software engineer',
	phone : 618302314
}

console.log(aboutMe);


class Data<T> {
	private data : T;

	constructor(data : T){
		this.data = data
	}

	get getData():T{
		return this.data;
	}

	set setData(data:T){
		this.data = data;
	}
}


const data = new Data<(string | number | [] | Object )>(aboutMe)
console.log(data.getData);

const simpleData = data.getData;
function myData<T>(person : T[]){
	return person.map((res, key) => res)
}
console.log(simpleData);







