import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly apiUrl = environment.apiUrl;

  private selectedPatientSubject = new BehaviorSubject<Patient | null>(null);

  selectedPatient$ = this.selectedPatientSubject.asObservable();

  constructor(private http: HttpClient) { }

  // Get all patients from API
  getPatients(): Observable<Patient[]> {

    const credentials = btoa(`${environment.apiUsername}:${environment.apiPassword}`);

    const headers = new HttpHeaders({
      Authorization: `Basic ${credentials}`
    });

    return this.http.get<Patient[]>(this.apiUrl, { headers });
  }

  selectPatient(patient: Patient): void {
    console.log('', patient)
    this.selectedPatientSubject.next(patient);
  }
}
