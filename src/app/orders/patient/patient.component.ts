import { Component, OnInit,Inject } from '@angular/core';
import { Patient } from '../../shared/patient.model';
import { MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";
import { ItemService } from '../../shared/item.service';
import { Person } from '../../shared/person.model';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../shared/order.service';
import {  Validators } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styles: []
})
export class PatientComponent implements OnInit {
  patient: Patient;
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PatientComponent>,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    if(this.data.patient == null)
    this.patient = {
      PersonId: 0,
      Firstname:'',
      Lastname :'',
      Email :'',
      Birth_date :'',
      Sex: '',
      Address1 :'',
      Address2 :'',
      Language:'',
      Zip :'',
      City :'',
      Country :'',
      Height : 0,
      Weight :0,
     Mobile_phone: '',
     Home_phone:''
     //personType: Person.PATIENT
    }
    else
    this.patient = Object.assign({},this.data.patient);
  }

  onSubmit(form: NgForm) { 
    if(this.validateForm(form.value)){
      if (this.data.patient == null){
        this.orderService.order.Patient = form.value;
      }
      else
      this.orderService.order.Patient= form.value; 
      this.dialogRef.close( this.orderService.order.Patient);
    }
   
  }
  validateForm(patient:Patient){
    this.isValid = true;
    if(patient.Firstname == ''){
      this.isValid = false;
    }
    else if(patient.Lastname == ''){
      this.isValid = false;
    }
    else if(patient.Email == ''){
      this.isValid = false;
    }
    else if(patient.Birth_date == ''){
      this.isValid = false;
    }
    else if(patient.Sex == ''){
      this.isValid = false;
    }
    else if(patient.Address1 == ''){
      this.isValid = false;
    }
    else if(patient.Zip == ''){
      this.isValid = false;
    }
    else if(patient.City == ''){
      this.isValid = false;
    }
    else if(patient.Country == ''){
      this.isValid = false;
    }
    else if(patient.Language == ''){
      this.isValid = false;
    }
    return this.isValid;
  }

}
