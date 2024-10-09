import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss'],
})
export class QuestComponent  implements OnInit {

  quests = [
    { name: 'Quête 1', progress: 5, total: 10 },
    { name: 'Quête 2', progress: 3, total: 5 },
    { name: 'Quête 3', progress: 8, total: 12 },
  ];
  
  constructor() { }

  ngOnInit() {}

}
