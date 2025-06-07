import { Component } from '@angular/core';
import { dummyTickets } from './mock-tickets'; // Import your mock tickets data
import { Ticket } from './ticket-card.model';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent {
  tickets: Ticket[] = dummyTickets;  // Assign dummy data
}
