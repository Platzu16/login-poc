import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  role: string;
  exp: number;
  iat: number;
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor() {}

  // Save token to localStorage
  saveToken(token: string): void {
    try {
      localStorage.setItem(this.tokenKey, token);
    } catch (error) {
      console.error('Error saving token to localStorage:', error);
    }
  }

  // Retrieve token from localStorage
  getToken(): string | null {
    try {
      return localStorage.getItem(this.tokenKey);
    } catch (error) {
      console.error('Error retrieving token from localStorage:', error);
      return null;
    }
  }

  // Decode token to get user data
  getUserRole(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken: DecodedToken = jwtDecode(token);
        return decodedToken.role; // Access role from JWT payload
      } catch (error) {
        console.error('Invalid token:', error);
        return null;
      }
    }
    return null;
  }

  // Clear token (for logout)
  clearToken(): void {
    try {
      localStorage.removeItem(this.tokenKey);
    } catch (error) {
      console.error('Error clearing token from localStorage:', error);
    }
  }
}
