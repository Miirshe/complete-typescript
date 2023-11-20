let my_name: string = "miirshe";
let my_age: number = 23;
let male: boolean = true;

function myProfile(): void{
	console.log(`my name : ${my_name}\nmy_age: ${my_age}\ngender: ${male}`);
}
myProfile();

function addNumbers(num1:number , num2:number){
	return num1 + num2;
}
let num1:number = 20;
let num2:number = 30;
let total: number = addNumbers(num1 , num2);
console.log(`The total: ${total}`);

function constantColors():void{
	enum Color{
		Red,Blue,Green,Yellow
	}

	let Colors:Color = Color.Blue
	console.log(`Color : ${Colors}`);
	
}
constantColors();


function myInfo(): void {
	let person: any = {
		fullName:"abdikafi isse isak",
		age: 23,
		gender: "male",
		phone: 618302314,
	}
	console.log('person',person.fullName);
}
myInfo();

function myFruit(fruits : Array<string>){
	fruits.forEach(element => {
		console.log(element);
	});
}
const myFruits : Array<string> = ["apple", "banana", "orange"];
myFruit(myFruits);


function oddNumbers(numbers: number[]){
	let i: number = 1;
	while(i <= numbers.length){
		if(numbers[i] % 2 != 0){
			console.log('odd numbers : ',numbers[i]);
		}
		i++;
	}
}

let numbers:number[] = [1,2,3,4,5,6,7,8,9,10];
oddNumbers(numbers);

