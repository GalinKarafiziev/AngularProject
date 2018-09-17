export class Department{
	id: number;
	name: string;
	location: string;
	menId: number;
	static Id:number = 1;

	constructor(name: string,location: string) {
        this.id = Department.Id++;
        this.name = name;
        this.location = location;
        this.menId = 0;
    }

}
