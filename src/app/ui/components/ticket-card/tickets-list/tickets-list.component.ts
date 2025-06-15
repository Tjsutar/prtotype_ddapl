import { Component } from '@angular/core';
import { dummyTickets } from './mock-tickets'; // Import your mock tickets data
import { Ticket } from '../../../../features/tickets/models/ticket-card.model';

@Component({
  selector: 'app-tickets-list',
  template:`<h1>Tickets List</h1>` ,
})
export class TicketsListComponent {
  tickets: Ticket[] = dummyTickets;  // Assign dummy data
}
