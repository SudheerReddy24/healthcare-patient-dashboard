import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-vital-cards',
  standalone: true,
  imports: [],
  templateUrl: './vital-cards.component.html',
  styleUrl: './vital-cards.component.css'
})
export class VitalCardsComponent implements OnInit {

  patient: Patient | null = null;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.selectedPatient$.subscribe(patient => {
      this.patient = patient;
    })
  }

}
