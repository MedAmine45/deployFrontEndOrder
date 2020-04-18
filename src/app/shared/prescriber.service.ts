import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PrescriberService {

  constructor(private http: HttpClient) { }

  getPrescriberList(){
    return this.http.get(environment.apiURL+'/People/Prescriber').toPromise();
  }
}
