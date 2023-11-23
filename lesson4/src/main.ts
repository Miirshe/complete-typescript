// today we cover classess , inheritance , interfaces and son on...
interface classMember {
	classNo : string
}
class ClassNo implements classMember{
	classNo: string;
	constructor(classNo: string){
		this.classNo = classNo
	}
}
class PersonalInfo extends ClassNo{
	public name:string;
	private age:number;
	private email:string;
	public address:string;
	public phone:number;

	constructor(name:string,address:string,phone:number,classNo:string){
		super(classNo)
		this.name = name;
		this.age = 0;
		this.email = ''
		this.address = address;
		this.phone = phone;
	}

	public get getAge():number{
		return this.age;
	}
	public set setAge(age:number){
		if(typeof(age) == 'number'){
			this.age = age;
			return;
		}
		throw new Error('age params must be a number');
	}
	public get getEmail():string{
		return this.email;
	}
	public set setEmail(email:string){
		if(typeof(email) == 'string'){
			this.email = email;
			return;
		}
		throw new Error('email params must be a string');
	}
}

const person = new PersonalInfo('miirshe','mogadishu-somalia',252618302314,'CA205')
person.setAge = 21;
person.setEmail = 'miirshe@gmail.com';
console.log(person);


