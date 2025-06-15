import { Component, OnInit} from '@angular/core';
import { ThemeToggleComponent } from "../../../shared/components/theme-toggle.component";
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-navbar',
  imports: [ThemeToggleComponent, CommonModule, RouterModule],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.scss'
})
export class UserNavbarComponent {
currentPage: string = '';
mobileMenuOpen: boolean = false;

toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      this.setCurrentPageStatus(url);
    });
  }

  setCurrentPageStatus(url: string): void {
    if (url.includes('/user-dashboard')) {
      this.currentPage = 'Dashboard';
    } else if (url.includes('/app-new-ticket')) {
      this.currentPage = 'Raise Ticket';
    } else if (url.includes('/know-device-status')) {
      this.currentPage = 'Device Status';
    } else if (url.includes('/bulk-upload')) {
      this.currentPage = 'Bulk Upload';
    } else {
      this.currentPage = '';
    }
  }
}

