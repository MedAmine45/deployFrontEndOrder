import { Injectable } from '@angular/core';
import { Prescription } from './prescription.model';
import { Person } from './person.model';
import { Patient } from './patient.model';
import { Prescriber } from './prescriber.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order : Prescription;
 
  constructor(private http: HttpClient) { }
 
  saveOrder(){
    return this.http.post(environment.apiURL+'/Kit_order',this.order);
  }
  putOrder(){
    return this.http.put(environment.apiURL+'/Kit_order/'+this.order.PrescriptionId,this.order);
     
   }


  getOrderList() {
    return this.http.get(environment.apiURL + '/Kit_order').toPromise();
  }

  getOrderByID(id:number):any {
    return this.http.get(environment.apiURL + '/Kit_order/'+id).toPromise();
  }

  deleteOrder(id:number) {
    return this.http.delete(environment.apiURL + '/Kit_order/'+id).toPromise();
  }

  changeState(id:number,newState:string){
    var body ={};
    return this.http.post(environment.apiURL + '/Kit_order/'+ id+"/state/"+newState,body).toPromise();
  }


}
