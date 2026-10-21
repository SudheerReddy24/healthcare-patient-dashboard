import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-lab-results',
  standalone: true,
  imports: [],
  templateUrl: './lab-results.component.html',
  styleUrl: './lab-results.component.css'
})
export class LabResultsComponent implements OnInit {

  patient: Patient | null = null;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.selectedPatient$.subscribe(patient => {
      console.log('Lab results:', patient?.lab_results);
      this.patient = patient
    });
  }
}
