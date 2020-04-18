import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";
import { OrderService } from '../../shared/order.service';
import { Analyse } from '../../shared/analyse.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styles: []
})
export class AnalyseComponent implements OnInit {
  analyse: Analyse;
  isValid: boolean = true;
  constructor( @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<AnalyseComponent>,
  private orderService: OrderService) { }

  ngOnInit() {
    if(this.data.analyseItemIndex == null)
    this.analyse ={
      AnalyseID:0,
      PrescriptionId: this.data.PrescriptionId,
      Code:'',
      Price:0,
      Tubes:'',
      Tube_gris:0,
      Tube_rouge:0,
      Tube_violet:0,
      Urine_matin:0,
      Selles:0
    }
    else
    this.analyse = Object.assign({},this.orderService.order.Analyses[this.data.analyseItemIndex]);
  }
  updateTubes(){
    this.analyse.Tubes = this.analyse.Tube_violet + " tubes violets + " + 
                         this.analyse.Tube_rouge + " tubes rouges + "+
                         this.analyse.Tube_gris + " tubes gris + " + 
                         this.analyse.Selles + " selles" ;
    this.analyse.Urine_matin = 0;  
  }
  updateTubesUrine(){
    this.analyse.Tubes = this.analyse.Urine_matin+"ères urines du matin";
    this.analyse.Tube_violet = 0;
    this.analyse.Tube_rouge = 0;
    this.analyse.Tube_gris = 0;
    this.analyse.Selles =0;

  }
  onSubmit(form:NgForm){
    if(this.validateForm(form.value)){
      if(this.data.analyseItemIndex == null)
      this.orderService.order.Analyses.push(form.value);
      else
      this.orderService.order.Analyses[this.data.analyseItemIndex]=form.value;
      this.dialogRef.close();
    }
    
  }

  validateForm(analyse:Analyse){
    this.isValid = true;
    if(analyse.Code == ''){
      this.isValid = false;
    }
    else if(analyse.Price == 0){
      this.isValid = false;
    }
    else if(analyse.Tubes == ''){
      this.isValid = false;
    }
    return this.isValid;
  }


}
