import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { VitalCardsComponent } from '../vital-cards/vital-cards.component';
import { Patient } from '../../models/patient';
import { Chart, registerables } from 'chart.js';
import { PatientService } from '../../services/patient.service';

Chart.register(...registerables)

@Component({
  selector: 'app-diagnosis-history',
  standalone: true,
  imports: [
    VitalCardsComponent
  ],
  templateUrl: './diagnosis-history.component.html',
  styleUrl: './diagnosis-history.component.css'
})
export class DiagnosisHistoryComponent implements AfterViewInit, OnDestroy {

  @ViewChild('bloodPressureChart')
  bloodPressureChat!: ElementRef<HTMLCanvasElement>;

  patient: Patient | null = null;

  selectedMonths = 6;

  private chart?: Chart;

  constructor(private patientService: PatientService) { }

  changePeriod(months: number): void {
    this.selectedMonths = months;
    this.createBloodPressureChart();
  }

  ngAfterViewInit(): void {
    this.patientService.selectedPatient$.subscribe(patient => {
      this.patient = patient;

      if (patient) {
        this.createBloodPressureChart();
      }
    })
  }

  private createBloodPressureChart(): void {

    if (!this.bloodPressureChat || !this.patient) {
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }

    const diagnosisHistory = [...this.patient.diagnosis_history]
      .reverse()
      .slice(-this.selectedMonths);

    const labels = diagnosisHistory.map(diagnosis =>
      `${diagnosis.month.substring(0, 3)}, ${diagnosis.year}`
    );

    const systolicValues = diagnosisHistory.map(
      diagnosis => diagnosis.blood_pressure.systolic.value
    );

    const diastolicValues = diagnosisHistory.map(
      diagnosis => diagnosis.blood_pressure.diastolic.value
    )

    this.chart = new Chart(
      this.bloodPressureChat.nativeElement,
      {
        type: 'line',

        data: {
          labels,

          datasets: [
            {
              label: 'Systolic',
              data: systolicValues,
              borderColor: '#E66FD2',
              backgroundColor: '#E66FD2',
              borderWidth: 2,
              pointRadius: 5,
              pointHitRadius: 6,
              pointBorderColor: '#FFFFFF',
              tension: 0.4
            },

            {
              label: 'Diastolic',
              data: diastolicValues,
              borderColor: '#8C6FE6',
              backgroundColor: '#8C6FE6',
              borderWidth: 2,
              pointRadius: 5,
              pointHitRadius: 6,
              pointBorderColor: '#FFFFFF',
              tension: 0.4
            }
          ]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },

            tooltip: {
              enabled: true
            }
          },

          scales: {
            y: {
              min: 60,
              max: 180,

              ticks: {
                stepSize: 20,
                color: '#072635'
              },

              grid: {
                color: '#CBC8D4'
              }
            },

            x: {
              ticks: {
                color: '#072635'
              },
              grid: {
                display: false
              }
            }
          }
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.chart?.destroy();
  }

}