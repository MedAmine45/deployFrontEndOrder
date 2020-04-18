import { Person } from './person.model';

export class Patient extends Person{
    public Birth_date :string;
    public Sex :string;
    public Height :number;
    public Weight :number;
    public Home_phone: string;
    constructor() {
        super();
       // this.personType = Person.PATIENT;
    }
}
