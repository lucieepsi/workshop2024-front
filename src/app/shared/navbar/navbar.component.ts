import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToSession() {
    this.router.navigate(['/session']);
  }

  goToClassement(){
    this.router.navigate(['/classement']);
  }

  goToProfil(){
    this.router.navigate(['/profil']);
  }

  isLoginPage() {
    return this.router.url === '/login';
  }
}
