// This file is part of the Angular application for user authentication.
// It provides the AuthService which handles user login, role management, and session state.
// It is designed to be used with a simple role-based access control system.
// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { User } from '../../services/models/user';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentRole: 'Admin' | 'Manager' | 'User' | null = null;

  login(email: string, password: string): boolean {
    if (email === 'admin@example.com' && password === 'admin123') {
      this.currentRole = 'Admin';
      return true;
    }
    if (email === 'manager@example.com' && password === 'manager123') {
      this.currentRole = 'Manager';
      return true;
    }
    if (email === 'user@example.com' && password === 'user123') {
      this.currentRole = 'User';
      return true;
    }
    return false;
  }

  getRole(): 'Admin' | 'Manager' | 'User' | null {
    return this.currentRole;
  }

  isLoggedIn(): boolean {
    return !!this.currentRole;
  }

  logout() {
    this.currentRole = null;
  }
}
