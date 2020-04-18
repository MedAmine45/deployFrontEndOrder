import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getPersonList(){
    this.http.get(environment.apiURL+'/People').toPromise();
  }
  getPatientList(){
    this.http.get(environment.apiURL+'/People/Patient').toPromise();
  }
  getPrescriberList(){
    this.http.get(environment.apiURL+'/People/Prescriber').toPromise();
  }
}
