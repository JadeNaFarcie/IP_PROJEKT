import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password)
      .then(res => {
        console.log('Logowanie zakończone sukcesem', res);
        this.router.navigate(['/quiz']); // Przekierowanie do quizMainPage po zalogowaniu
      })
      .catch(err => {
        console.log('Błąd podczas logowania', err);
      });
  }
}
