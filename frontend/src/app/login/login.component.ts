import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  login() {
    const payload = {
      email: this.email,
      password: this.password,
    };
    this.http
      .post<{ token: string }>('http://localhost:5000/api/auth/login', payload)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          // In your login success response
          this.authService.saveToken(response.token);

          console.log('Login successful');
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
  }
}
