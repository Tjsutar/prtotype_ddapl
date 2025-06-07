import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  imports: [NgFor],
  standalone: true,
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.scss'
})
export class TicketListComponent {
 @Input() tickets: any[] = [];
}
