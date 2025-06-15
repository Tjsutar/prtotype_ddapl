import { Routes } from '@angular/router';
import { roleGuard } from './core/auth/guards/role.guard';
import { LayoutComponent } from './layouts/main-layout/layout/layout.component';
// src/app/app.routes.ts

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Redirect to login if no path matches
  // Main application routes
  {
    path: '',
    component: LayoutComponent, // ✅ common layout for all roles
    children: [
      {
        path: 'admin-dashboard',
        loadComponent: () =>
          import('./layouts/admin/admin-dashboard/admin-dashboard.component').then((m) => m.AdminDashboardComponent),
        canActivate: [roleGuard(['Admin'])],
      },
      {
        path: 'manager-dashboard',
        loadComponent: () =>
          import('./layouts/manager/manager-dashboard/manager-dashboard.component').then((m) => m.ManagerDashboardComponent),
        canActivate: [roleGuard(['Manager'])],
      },
      {
        path: 'user-dashboard',
        loadComponent: () =>
          import('./layouts/user/user-dashboard/user-dashboard.component').then((m) => m.UserDashboardComponent),
        canActivate: [roleGuard(['User'])],
      },
      {
        path: 'app-new-ticket',
        loadComponent: () =>
          import('./features/tickets/components/new-ticket/new-ticket.component').then((m) => m.NewTicketComponent),
        canActivate: [roleGuard(['User', 'Manager', 'Admin'])], // adjust as needed
      },
    ],
  },

  // Login route
  {
    path: 'login',
    loadComponent: () =>
      import('./shared/components/login/login.component').then(m => m.LoginComponent),
  },
];
