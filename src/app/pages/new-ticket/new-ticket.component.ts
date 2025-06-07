  // This file is part of the Angular project and is used to define the NewTicketComponent.
  // It allows users to create new tickets and toggle the visibility of ticket details.   
  // It is designed to be used in a ticket management system where users can submit new tickets.
  // src/app/pages/new-ticket/new-ticket.component.ts 
  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

  @Component({
    selector: 'app-new-ticket',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.scss'
  })
  export class NewTicketComponent {
  showDetails = true;

    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
