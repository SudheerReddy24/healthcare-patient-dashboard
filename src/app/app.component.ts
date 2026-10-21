import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { DiagnosisHistoryComponent } from './components/diagnosis-history/diagnosis-history.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { DiagnosticListComponent } from './components/diagnostic-list/diagnostic-list.component';
import { LabResultsComponent } from './components/lab-results/lab-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PatientListComponent,
    DiagnosisHistoryComponent,
    PatientProfileComponent,
    DiagnosticListComponent,
    LabResultsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
