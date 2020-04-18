import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";
import { OrderService } from '../../shared/order.service';
import { NgForm } from '@angular/forms';
import { Log } from '../../shared/Log.model';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styles: []
})
export class LogComponent implements OnInit {
  log: Log;
  isValid: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<LogComponent>,
  private orderService: OrderService) { }

  ngOnInit() {
    if(this.data.logItemIndex == null)
    this.log ={
      LogID:0,
      PrescriptionId: this.data.PrescriptionId,
      State:'',
      Billing_state:'',
      Invoice_state:'',
      By:'',
      On: new Date()
    }
    else
    this.log = Object.assign({},this.orderService.order.Logs[this.data.logItemIndex]);
   }

   validateForm(log: Log){
    this.isValid = true;
    if(log.On.toString() == ''){
      this.isValid = false;
    }
    else if(log.By == ''){
      this.isValid = false;
    } 
    else if(log.State == '' && log.Billing_state == '' && log.Invoice_state ==''){
      this.isValid = false;
    }else
    return this.isValid;
  }
  onSubmit(form:NgForm){
    if(this.validateForm(form.value)){
      if(this.data.logItemIndex == null)
      this.orderService.order.Logs.push(form.value);
      else
      this.orderService.order.Logs[this.data.logItemIndex]=form.value;
      this.dialogRef.close();
    }
    
  }


  }


