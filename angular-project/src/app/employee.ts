export class Employee{

	
	firstname: string;
	lastname: string;
	age: number;
	gender: string;
	department: string;
	static Id:number = 1;
    id: number;
   

	constructor(firstname: string,lastname: string,age: number,gender: string,department: string) {
        this.id = Employee.Id++;
        this.age = age;
        this.department = department;
        this.gender = gender;
        this.firstname = firstname;
        this.lastname = lastname;
    }


}