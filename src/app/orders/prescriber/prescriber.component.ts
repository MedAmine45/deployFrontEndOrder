import { Component, OnInit,Inject } from '@angular/core';
import { Prescriber } from '../../shared/prescriber.model';
import { MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";
import { ItemService } from '../../shared/item.service';
import { Person } from '../../shared/person.model';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../shared/order.service';
import { Prescription } from '../../shared/prescription.model';

@Component({
  selector: 'app-prescriber',
  templateUrl: './prescriber.component.html',
  styles: []
})
export class PrescriberComponent implements OnInit {
  prescriber: Prescriber;
  order: Prescription;
  isValid: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PrescriberComponent>,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    if(this.data.prescriber == null)
    this.prescriber = {
      PersonId: 0,
      Firstname:'',
      Lastname :'',
      Email :'',
      Language:'',
      Address1 :'',
      Address2 :'',
      Zip :'',
      City :'',
      Country :'',
      Mobile_phone: '',
      Office_phone:''
     //personType: Person.PRESCRIBER
    }
    else
    this.prescriber = Object.assign({},this.data.prescriber);
  }

  onSubmit(form: NgForm) { 
    if(this.validateForm(form.value)){
      if (this.data.prescriber == null)
      this.orderService.order.Prescriber = form.value;
      else
      this.orderService.order.Prescriber = form.value; 
      this.dialogRef.close();
    }
     
  }

  validateForm(prescriber:Prescriber){
    this.isValid = true;
    if(prescriber.Firstname == ''){
      this.isValid = false;
    }
    else if(prescriber.Lastname == ''){
      this.isValid = false;
    }
    else if(prescriber.Email == ''){
      this.isValid = false;
    }
    else if(prescriber.Address1 == ''){
      this.isValid = false;
    }
    else if(prescriber.Zip == ''){
      this.isValid = false;
    }
    else if(prescriber.City == ''){
      this.isValid = false;
    }
    else if(prescriber.Country == ''){
      this.isValid = false;
    }
    else if(prescriber.Language == ''){
      this.isValid = false;
    }
    return this.isValid;
  }

}
