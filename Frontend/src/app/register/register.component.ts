import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.email, this.password)
      .then(res => {
        console.log('Rejestracja zakończona sukcesem', res);
        this.router.navigate(['/login']); // Przekierowanie do strony logowania po rejestracji
      })
      .catch(err => {
        console.log('Błąd podczas rejestracji', err);
      });
  }
}
