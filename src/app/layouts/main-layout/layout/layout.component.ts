import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserNavbarComponent } from '../../user/user-navbar/user-navbar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  imports: [UserNavbarComponent, RouterModule,CommonModule],
  template: `
    
    <app-user-navbar *ngIf="role === 'User'"></app-user-navbar>
    <!-- <app-admin-navbar *ngIf="role === 'Admin'"></app-admin-navbar> -->
    <!-- <app-manager-navbar *ngIf="role === 'Manager'"></app-manager-navbar> -->
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public role: string = 'User'; // Set default or fetch dynamically as needed
}
