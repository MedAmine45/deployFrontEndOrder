export abstract class Person {
    public PersonId :number;
    public Firstname :string
    public Lastname :string;
    public Email :string;
    public Address1 :string;
    public Address2 :string;
    public Zip :string;
    public City :string;
    public Country :string;
    public Language:string;
  
    public Mobile_phone :string;
    // public personType: string;
    // public static PATIENT = "PATIENT";
    // public static PRESCRIBER = "PRESCRIBER";
    constructor(id: number = 0, firstname: string = '',lastname: string = '',email: string = '',language: string = '',
                address1: string = '',address2: string = '',zip: string ='',city: string = '',country: string = '',
             mobilephone: string = ''
                    ) {
                                    this.PersonId = id;
                                    this.Firstname = firstname;
                                    this.Lastname = lastname;
                                    this.Email = email;
                                    this.Language = language;
                                    this.Address1 = address1;
                                    this.Address2 = address2;
                                    this.Zip = zip;
                                    this.City = city;
                                    this.Country = country;
                                    this.Mobile_phone = mobilephone;

                                    }
}
