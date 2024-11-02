import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  selectedRole: string = 'user'; // Default role
  isAuthorizedUser: boolean = true; // Flag to determine if user can assign roles

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Retrieve user's role from JWT and check if they have permission
    const userRole = this.authService.getUserRole();
    this.isAuthorizedUser = userRole === 'admin' || userRole === 'superadmin';
  }

  register() {
    const payload = {
      email: this.email,
      password: this.password,
      role: this.selectedRole,
    };

    this.http
      .post('http://localhost:5000/api/auth/register', payload)
      .subscribe({
        next: (response) => {
          console.log('Registration successful');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
  }
}
