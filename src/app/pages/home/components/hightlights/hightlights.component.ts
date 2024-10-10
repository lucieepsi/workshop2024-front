import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/services/http-service.service';
import { AverageModel } from '../../../../core/models/averageModel';
import { HttpClientModule } from '@angular/common/http';
import { ApexChart, ApexTooltip, ApexXAxis, NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'app-hightlights',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgApexchartsModule],
  templateUrl: './hightlights.component.html',
  styleUrls: ['./hightlights.component.scss'],
  providers: [HttpService]
})
export class HightlightsComponent implements OnInit {
  averageData!: AverageModel;
  errorMessage!: string;

  daysVisible: boolean = false;
  showValues: boolean = false; 

  public tourChartOptions: {
    chart: ApexChart;
    xaxis: ApexXAxis;
    tooltip: ApexTooltip;
    series: { name: string; data: number[] }[];
    colors: string[];
  };

  public calorieChartOptions: {
    chart: ApexChart;
    xaxis: ApexXAxis;
    tooltip: ApexTooltip;
    series: { name: string; data: number[] }[];
    colors: string[];
  };

  constructor(private httpService: HttpService) {
    this.tourChartOptions = {
      chart: {
        type: 'bar',
        height: 120,
        toolbar: { show: false },
        events: {
          dataPointSelection: (event, chartContext, { dataPointIndex }) => {
            this.daysVisible = !this.daysVisible; 
            this.showValues = true;  // Activer l'affichage des valeurs après clic
            this.tourChartOptions.xaxis.categories = this.daysVisible ? 
              ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] : [];
          }
        },
      },
      xaxis: {
        categories: [] 
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val: number) => this.showValues ? `${val} tours` : '', 
        }
      },
      series: [
        {
          name: 'Tours',
          data: [] 
        }
      ],
      colors: ['#99C8F2'],
    };

    this.calorieChartOptions = {
      chart: {
        type: 'bar',
        height: 120,
        toolbar: { show: false },
        events: {
          dataPointSelection: (event, chartContext, { dataPointIndex }) => {
            this.daysVisible = !this.daysVisible; 
            this.showValues = true;  
            this.calorieChartOptions.xaxis.categories = this.daysVisible ? 
              ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] : [];
          }
        },
      },
      xaxis: {
        categories: [] 
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val: number) => this.showValues ? `${val} kcal` : '', 
        }
      },
      series: [
        {
          name: 'Calories (kcal)',
          data: [] 
        }
      ],
      colors: ['#99C8F2'],
    };
  }

  ngOnInit(): void {
    const email = localStorage.getItem('email');

    if (email) {
      this.httpService.getCurrentWeekAverage(email).subscribe({
        next: (data: AverageModel) => {
          this.averageData = data;
          this.tourChartOptions.series[0].data = [600, 200, 500, 400, 300, 200, 600]; 
          this.calorieChartOptions.series[0].data = [10, 12, 15, 8, 20, 14, 18]; 
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors de la récupération des données.';
        }
      });
    } else {
      this.errorMessage = 'Aucun email trouvé, veuillez vous connecter.';
    }
  }
}