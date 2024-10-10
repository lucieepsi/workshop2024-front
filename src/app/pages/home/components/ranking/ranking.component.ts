import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/services/http-service.service';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  providers: [HttpService]
})
export class RankingComponent  implements OnInit {
  topUsers: any[] = [];  

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getTopUsers(); 
  }

  getTopUsers(): void {
    this.httpService.getTopUsersByPoints().subscribe(
      (data: any[]) => {
        this.topUsers = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    );
  }
}