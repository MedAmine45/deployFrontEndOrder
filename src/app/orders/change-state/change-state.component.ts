import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";
import { OrderService } from '../../shared/order.service';
import { NgForm } from '@angular/forms';
import { Prescription } from '../../shared/prescription.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-state',
  templateUrl: './change-state.component.html',
  styles: []
})
export class ChangeStateComponent implements OnInit {
  newState:string;
  isValid : Boolean = true;
  constructor(
          @Inject(MAT_DIALOG_DATA) public data,
          public dialogRef: MatDialogRef<ChangeStateComponent>,
          private orderService: OrderService,
          private toastr: ToastrService
            ) { }

  ngOnInit() {
  this.newState = this.data.order.State;
  }

  onSubmit(form :NgForm){
    if(this.validateForm(form.value)){
      this.orderService.changeState(this.data.order.PrescriptionId,this.newState).then(res=>{
        //this.refreshList();
        this.toastr.info("State saved Successfully and check your email to follewed  your prescription","Order App");
        this.orderService.order.State = this.newState;
      });   
      this.dialogRef.close();
    }
  }
  validateForm(state: any){
    this.isValid = true;
    if(state.State == ''){
      this.isValid = false;
    }
    return this.isValid;
  }

}
