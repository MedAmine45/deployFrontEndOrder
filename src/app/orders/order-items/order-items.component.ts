import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";
import { Patient } from '../../shared/patient.model';
import { Prescriber } from '../../shared/prescriber.model';
import { Person } from '../../shared/person.model';
import { ItemService } from '../../shared/item.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {
  patient: Patient;
  prescriber: Prescriber;
  person: Person;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.patient = {
      PersonId: null,
      Firstname:'',
      Lastname :'',
      Email :'',
      Birth_date :'',
      Sex: '',
      Address1 :'',
      Address2 :'',
      Zip :'',
      City :'',
      Country :'',
      Language:'',
      Height : 0,
      Weight :0,
     Mobile_phone: '',
     Home_phone:''
    }
  }

}
