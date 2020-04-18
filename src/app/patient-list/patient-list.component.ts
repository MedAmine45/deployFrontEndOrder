import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients : Patient[];
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.refreshList();
  }
  refreshList() {
    this.patientService.getPatientList().then(res=>this.patients = res as Patient[]);
  }

}
