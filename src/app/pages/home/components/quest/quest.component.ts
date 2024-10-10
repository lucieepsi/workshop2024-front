import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/services/http-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-quest',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss'],
  providers: [HttpService]
})
export class QuestComponent implements OnInit {

  landings: any[] = [];  

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.httpService.getQuests(email).subscribe(
        (data) => {
          this.landings = data;
          console.log('Landings:', this.landings);
        },
        (error) => {
          console.error('Erreur lors de la récupération des quests:', error);
        }
      );
    }
  }

}
