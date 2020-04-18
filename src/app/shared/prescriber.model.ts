import { Person } from './person.model';

export class Prescriber extends Person {
    public Office_phone: string;
    
    constructor() {
        super();
       // this.personType = Person.PRESCRIBER;
    }
}
