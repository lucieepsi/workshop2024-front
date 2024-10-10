import { Component, OnInit } from '@angular/core';
import { QuestComponent } from './components/quest/quest.component';
import { RouterOutlet } from '@angular/router';
import { RankingComponent } from "./components/ranking/ranking.component";
import { HightlightsComponent } from "./components/hightlights/hightlights.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, QuestComponent, RankingComponent, HightlightsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
