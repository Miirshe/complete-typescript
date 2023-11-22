// today we cover function , array , enum , interfaces and type aliases

// return value function
const sumAll = function (num1:number ,num2:number):number {
	return num1 +num2;
}
const sum = sumAll(10,20);
console.log(`the sum : ${sum}`);
// return void function 

function evenNumber(numbers:number[]):void{
	type evenNum = number[]
	let evenNums : evenNum = []
	numbers.forEach( num => {
		if(num % 2 == 0){
			evenNums.push(num)
		}
	})
	console.log(`The even number : [${evenNums}]`);
	
}
evenNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
// default parameter
function multiply (num1:number,num2:number = 20){
	return num1 * num2;
}
console.log(`default parameter function : ${multiply(10)}`);
// rest parameter
function sumNumArr(...num:number[]){
	return num.reduce((prev , curr) => prev+curr);
}
console.log(sumNumArr(1,2,3,4,5,6,7,8,9,10));

