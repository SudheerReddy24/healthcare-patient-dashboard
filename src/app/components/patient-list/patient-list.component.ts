import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];

  selectedPatientName: string | null = null;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  selectPatient(patient: Patient): void {
    console.log('Clicked patient:', patient);
    this.selectedPatientName = patient.name;
    this.patientService.selectPatient(patient);
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe({
      next: (patients) => {
        this.patients = patients;

        if (patients.length > 0) {
          this.patientService.selectPatient(patients[0]);
        }
      },
      error: (error) => {
        console.error('Failed to fetch patients: ', error);
      }
    });
  }
}
