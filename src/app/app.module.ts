import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PrescriberComponent } from './orders/prescriber/prescriber.component';
import { PatientComponent } from './orders/patient/patient.component';
import { HeaderComponent } from './header/header.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PrescriberListComponent } from './prescriber-list/prescriber-list.component';
import { CreatePatientComponent } from './Patient-list/create-patient/create-patient.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component'; 
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AnalyseComponent } from './orders/analyse/analyse.component';
import { LogComponent } from './orders/log/log.component';
import { ChangeStateComponent } from './orders/change-state/change-state.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    PrescriberComponent,
    PatientComponent,
    HeaderComponent,
    PatientListComponent,
    PrescriberListComponent,
    CreatePatientComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AnalyseComponent,
    LogComponent,
    ChangeStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule, MatInputModule,MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {progressBar: true}
    )
  ],
  entryComponents: [PatientComponent,PrescriberComponent,AnalyseComponent,LogComponent,ChangeStateComponent],
  providers: [OrderService,UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
