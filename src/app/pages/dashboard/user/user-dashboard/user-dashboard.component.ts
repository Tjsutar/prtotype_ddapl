import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewTicketComponent } from "../../../new-ticket/new-ticket.component";
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from "../../../components/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-user-dashboard',
  imports: [NewTicketComponent, RouterOutlet, ThemeToggleComponent, RouterModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

  mobileMenuOpen = false;

toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
}
