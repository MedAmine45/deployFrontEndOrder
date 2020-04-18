import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './orders/order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PrescriberListComponent } from './prescriber-list/prescriber-list.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'}, //{path:'',redirectTo:'/user/login',pathMatch:'full'}
  {path:'orders',component:OrdersComponent},
  {path:'order',children:[
    {path:'',component:OrderComponent},
    {path:'edit/:id',component:OrderComponent}
  ]},
  //  {path:'patients',component:PatientListComponent},
  //  {path:'prescribers',component:PrescriberListComponent},
  {path:'user',component:UserComponent,
    children:[
      {path:'registration',component:RegistrationComponent},
      {path: 'login',component:LoginComponent}
    ]},
   {path:'home',component:HomeComponent ,canActivate:[AuthGuard],
   children:[
    {path:'patients',component:PatientListComponent},
    {path:'prescribers',component:PrescriberListComponent},
    {path:'Homeorders',component:OrdersComponent} 
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
