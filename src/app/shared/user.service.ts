import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder , private http: HttpClient) { }

  formModel = this.fb.group({
    UserName :['',Validators.required],
    Email:['', Validators.email],
    FirstName :[''],
    LastName :[''],
    Passwords:this.fb.group({
      Password:['',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword:['',Validators.required]
    },{validator: this.comparePasswords})   
  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }
  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(environment.apiURL + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(environment.apiURL + '/ApplicationUser/Login', formData);
  }
  getUserProfile() {
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')});
    return this.http.get(environment.apiURL + '/UserProfile',{headers:tokenHeader});
  }
}
