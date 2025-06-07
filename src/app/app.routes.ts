import { LoginComponent } from './pages/login/login.component';



import { AdminDashboardComponent } from './pages/dashboard/admin/admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './pages/dashboard/manager/manager-dashboard/manager-dashboard.component';  
import { UserDashboardComponent } from './pages/dashboard/user/user-dashboard/user-dashboard.component';
import { Routes } from '@angular/router';
import { roleGuard } from './core/guards/role.guard';
// src/app/app.routes.ts

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'admin-dashboard',
    loadComponent: () =>
      import('./pages/dashboard/admin/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
    canActivate: [roleGuard(['Admin'])],
  },
  {
    path: 'manager-dashboard',
    loadComponent: () =>
      import('./pages/dashboard/manager/manager-dashboard/manager-dashboard.component').then(m => m.ManagerDashboardComponent),
    canActivate: [roleGuard(['Manager'])],
  },
  {
    path: 'user-dashboard',
    loadComponent: () =>
      import('./pages/dashboard/user/user-dashboard/user-dashboard.component').then(m => m.UserDashboardComponent),
    canActivate: [roleGuard(['User'])],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
  },
];
