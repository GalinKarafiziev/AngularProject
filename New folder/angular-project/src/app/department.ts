export class Department{
	id: number;
	name: string;
	location: string;
		static Id:number = 1;

	constructor(name: string,location: string) {
        this.id = Department.Id++;
        this.name = name;
				this.location=location;

    }


}
