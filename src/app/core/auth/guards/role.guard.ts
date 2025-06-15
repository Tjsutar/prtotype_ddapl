import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
// import { AuthService } from '';

export function roleGuard(allowedRoles: string[]): CanActivateFn {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const userRole = auth.getRole();
    if (userRole && allowedRoles.includes(userRole)) {
      return true;
    }

    router.navigate(['/login']);
    return false;
  };
}
