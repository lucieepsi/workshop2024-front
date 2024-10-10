import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { HttpService } from '../../core/services/http-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
  providers: [HttpService]
})

export class SessionComponent implements OnInit {
  lastSession: any; 
  isSessionActive: boolean = false;
  timer: number = 0;
  lapCount: number = 0;
  timerSubscription: Subscription | undefined;
  intervalId: any;
  email: string | null = null;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    if (this.email) {
      this.fetchLastSession(); 
      this.intervalId = setInterval(() => {
        this.fetchLastSession(); 
      }, 3000);
    }
  }

  fetchLastSession(): void {
    if (this.email) { 
      this.httpService.getLastSession(this.email).subscribe(
        (data) => {
          this.lastSession = data; 
          console.log(this.lastSession); 
        },
        (error) => {
          console.error('Erreur lors de la récupération de la dernière session:', error);
        }
      );
    } else {
      console.error('Email is null. Cannot fetch last session.');
    }
  }
  

  stopSession() {
    if (this.isSessionActive) {
      this.isSessionActive = false; // Arrête la session
      this.timerSubscription?.unsubscribe(); // Arrête le chronomètre si défini
    }
  }

  isToday(sessionDate: string): boolean {
    const today = new Date();
    const sessionDateObj = new Date(sessionDate);
    
    // Vérifie si les années, mois et jours sont les mêmes
    return today.getFullYear() === sessionDateObj.getFullYear() &&
           today.getMonth() === sessionDateObj.getMonth() &&
           today.getDate() === sessionDateObj.getDate();
  }

  calculateAverageSpeed(startTime: string, distance: number): string {
    // Extraction de l'heure et des minutes à partir de startTime
    const [hours, minutes] = startTime.split(':').map(Number);

    // Créer une date avec l'heure de début
    const startDate = new Date();
    startDate.setHours(hours);
    startDate.setMinutes(minutes);
    startDate.setSeconds(0); 

    const endDate = new Date();

    const durationInHours = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);

    if (durationInHours <= 0) {
      return "0.000"; 
    }

    // Calculer la vitesse moyenne
    const averageSpeed = (distance * 2.65 / 1000) / durationInHours; 

    // Arrondir à trois chiffres après la virgule
    return averageSpeed.toFixed(3);
}

}


