import { Component } from '@angular/core';
import { NewTicketComponent } from "../../../new-ticket/new-ticket.component";

@Component({
  selector: 'app-user-dashboard',
  imports: [NewTicketComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

}
