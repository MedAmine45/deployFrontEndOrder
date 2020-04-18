import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/order.service';
import { NgForm } from '@angular/forms';
import { Patient } from '../../shared/patient.model';
import { Prescriber } from '../../shared/prescriber.model';
import { StateEnum, BillingState } from '../../shared/prescription.model';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { PatientComponent } from '../patient/patient.component';
import { PrescriberComponent } from '../prescriber/prescriber.component';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../../shared/person.model';
import { AnalyseComponent } from '../analyse/analyse.component';
import { LogComponent } from '../log/log.component';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  public state : StateEnum;
  public BillingState : BillingState;
  isValid: boolean = true;
  prescriber: Prescriber;
  patient: Patient;

  constructor(private orderService: OrderService,
              private dialog:MatDialog,
              private toastr: ToastrService,
              private router: Router,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    let PrescriptionId = this.currentRoute.snapshot.paramMap.get('id');
    if(PrescriptionId == null)
    this.resetForm();
    else{
      this.orderService.getOrderByID(parseInt(PrescriptionId)).then(res=>{
        this.orderService.order = res;
        this.patient = this.orderService.order.Patient;
        this.prescriber = this.orderService.order.Prescriber;
      });
    }
 

  }
  resetForm(form?:NgForm){
    if(form = null)
    form.resetForm();
    this.orderService.order = {
      PrescriptionId: 0,
      State: '',
      Billing_state: '',
      Invoice_state:'',
      Invoice_id:'',
      Amount_paid:0,
      Payment_method:'',
      Dossier_glims:'',
      Kit_shipping_no:'',
      Sample_shipping_no:'',
      Shipped_by:'',
      Shipped_on:'',
      Patient: null,
      Prescriber: null,
      Price_analyses: 0,
      Price_shipping:0,
      Analyses:[],
      Logs:[]
    };
  }
  AddorEditPatient(patient,order){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width ="50%";
    dialogConfig.data = {patient};
    this.dialog.open(PatientComponent,dialogConfig).afterClosed().subscribe(res => {
      if(this.orderService.order.Patient != null){
      this.toastr.info('patient Saved successfully', 'Order. Register');
      }
    });
  }
  AddorEditPrescriber(prescriber,Order){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width ="50%";
    dialogConfig.data = {prescriber,Order};
    this.dialog.open(PrescriberComponent,dialogConfig).afterClosed().subscribe(res => {
      if(this.orderService.order.Prescriber != null){
      this.toastr.info('Prescriber saved successfully', 'Order. Register');
      }
    });
  }

  AddOrEditOrderAnalyse(analyseItemIndex,PrescriptionId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width ="50%";
    dialogConfig.data = {analyseItemIndex,PrescriptionId};
    this.dialog.open(AnalyseComponent,dialogConfig).afterClosed().subscribe(res => {
      if(this.orderService.order.Analyses.length != 0){
        this.toastr.info('Analyse saved successfully', 'Order. Register');
      }
      
    });
  }
  onDeleteOrderAnalyse(analyseID:number,i:number){
    this.orderService.order.Analyses.splice(i,1);
  }

  AddOrEditOrderLog(logItemIndex,PrescriptionId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width ="50%";
    dialogConfig.data = {logItemIndex,PrescriptionId};
    this.dialog.open(LogComponent,dialogConfig).afterClosed().subscribe(res => {
      if(this.orderService.order.Logs.length != 0){
        this.toastr.info('log saved successfully', 'Order. Register');
      }
      
    });
  }
  onDeleteOrderLog(logID:number,i:number){
    this.orderService.order.Logs.splice(i,1);
  }
  

/*   onSubmit(form:NgForm){
    this.orderService.saveOrder().subscribe(res=>{
      this.resetForm();
      this.toastr.success("Submitted Successfully",'Order App');
      this.router.navigate(['/orders']);
    });
    this.router.navigate(['/orders']);
  } */

  onSubmit(form: NgForm) {
    if(this.ValidateForm()){
      if (form.value.PrescriptionId == 0){
        this.insertOrder();
      }  
      else{
        this.updateOrder();
      }   
      this.gotoList();
    }
    }

  gotoList() {
   // this.router.navigateByUrl('/home');
    this.router.navigateByUrl('/home').then(() => {
      window.location.reload();
    });
  }
  insertOrder() {
    this.orderService.saveOrder().subscribe(res => {
      this.toastr.success('Inserted successfully', 'Order. Register');
      this.resetForm();
    });
  }
  updateOrder() {
    this.orderService.putOrder().subscribe(res => {
      this.toastr.info('Updated successfully', 'Order. Register');
      this.resetForm();
    });
  }

  ValidateForm(){
    this.isValid = true;
    if(this.orderService.order.State == ''){
      this.isValid =false
    }
    else if(this.orderService.order.Billing_state ==''){
      this.isValid =false
    }
    else if(this.orderService.order.Invoice_state ==''){
      this.isValid =false
    }
    else if(this.orderService.order.Price_shipping == 0){
      this.isValid =false
    }
    else if(this.orderService.order.Price_analyses == 0){
      this.isValid =false
    }
    else if(this.orderService.order.Amount_paid == 0){
      this.isValid =false
    }
    else if(this.orderService.order.Payment_method == ''){
      this.isValid =false
    }
    else if(this.orderService.order.Amount_paid == 0){
      this.isValid =false
    }
    else if(this.orderService.order.Patient == null){
      this.isValid =false
    }
    else if(this.orderService.order.Prescriber == null){
      this.isValid =false
    }
    else if(this.orderService.order.Analyses.length == 0){
      this.isValid =false
    }
    else if(this.orderService.order.Logs.length == 0){
      this.isValid =false
    }

    return this.isValid;
  }

}
