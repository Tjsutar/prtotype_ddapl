// This file is part of the Angular application for user authentication.
// It provides the AuthService which handles user login, role management, and session state.
// It is designed to be used with a simple role-based access control system.
// src/app/core/services/auth.service.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  // ❌ Removed: providers: [AuthService]
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    const success = this.authService.login(email, password);

    if (success) {
      const role = this.authService.getRole();
      console.log(`Login successful as ${role}`);

      if (role === 'Admin') {
        this.router.navigate(['/admin-dashboard']);
      } else if (role === 'Manager') {
        this.router.navigate(['/manager-dashboard']);
      } else if (role === 'User') {
        this.router.navigate(['/user-dashboard']);
      }
    } else {
      this.loginError = 'Invalid email or password';
    }
  }
}
