import { Component } from '@angular/core';
import { HttpService } from '../../core/services/http-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    HttpService 
  ]
})

export class LoginComponent {
  name: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private httpService: HttpService) { }

  onSubmit(): void {
    this.httpService.login(this.name, this.password).subscribe({
      next: (response) => {
        console.log('Connexion réussie', response);
        alert('Connexion réussie');
      },
      error: (err) => {
        console.log('Erreur de connexion', err);
        this.errorMessage = 'Connexion échouée : identifiants incorrects.';
      }
    });
  }
}

