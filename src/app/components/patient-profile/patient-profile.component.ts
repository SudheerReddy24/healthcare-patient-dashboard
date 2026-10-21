import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent implements OnInit {

  patient: Patient | null = null;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {

    this.patientService.selectedPatient$.subscribe({
      next: (patient) => {
        console.log('Patient profile:', patient);
        this.patient = patient;
      }
    });
  }
}
