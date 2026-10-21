import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-diagnostic-list',
  standalone: true,
  imports: [],
  templateUrl: './diagnostic-list.component.html',
  styleUrl: './diagnostic-list.component.css'
})
export class DiagnosticListComponent implements OnInit {

  patient: Patient | null = null;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.selectedPatient$.subscribe(patient => {
      this.patient = patient;
    })
  }
}
