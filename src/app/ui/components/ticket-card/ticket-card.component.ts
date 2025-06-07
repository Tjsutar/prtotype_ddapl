import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Ticket } from '../tickets-list/ticket-card.model';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent {
  // Uncomment the following lines if you want to use the Ticket interface
  // @Input() ticket!: Ticket;

  // get formattedDate(): string {
    // const date = new Date(this.ticket?.CreatedDate);
    // return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  // }

  // get isUnderWarranty(): boolean {
    // return this.ticket?.WarrantyType === 'CompWarranty';
  // }
}
