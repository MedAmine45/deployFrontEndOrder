import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Prescription } from '../shared/prescription.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog,MatDialogConfig,DialogPosition } from '@angular/material/dialog';
import { ChangeStateComponent } from './change-state/change-state.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: []
})
export class OrdersComponent implements OnInit {
 orderList : Prescription[];
 order : Prescription;
  constructor(private orderService:OrderService,
             private dialog:MatDialog,
              private router:Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }
  refreshList(){
    this.orderService.getOrderList().then(res=>this.orderList = res as Prescription[]);
  }
  openForEdit(id:number){
    this.router.navigate(['/order/edit/'+id]);
  }
  onOrderDelete(id:number){
    if(confirm('Are you sure to delete this record?')){
      this.orderService.deleteOrder(id).then(res=>{
        this.refreshList();
        this.toastr.warning("Deleted Successfully","Order App");
      });    
    }
    }
    onChangeState(order:Prescription){
      const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width ="50%";
    //dialogConfig.position = {top: '100px'};
    dialogConfig.data = {order};
    this.dialog.open(ChangeStateComponent,dialogConfig).afterClosed().subscribe(res => {
      
       // this.toastr.info('State saved successfully', 'Order. Register');
       this.refreshList();
      
      
    });
    }
    


}
