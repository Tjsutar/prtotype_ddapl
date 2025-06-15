// src/app/pages/new-ticket/new-ticket.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { TicketService } from '../../../../core/services/api/ticket.service'; // adjust path as needed

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
})
export class NewTicketComponent implements OnInit {
  showDetails = true;
  ticketForm!: FormGroup;

  constructor(private fb: FormBuilder, private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      companyName: ['', Validators.required],
      contactPerson: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      storeLocation: ['', Validators.required],
      modelNumber: ['', Validators.required],
      serialNumber: ['', Validators.required],
      problemType: ['', Validators.required],
      hardwareType: ['', Validators.required],
      problemDescription: ['', Validators.required],
      uploadImage1: [null],
      uploadImage2: [null],
    });
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  onFileChange(event: any, control: string): void {
    const file = event.target.files[0];
    if (file) {
      this.ticketForm.patchValue({ [control]: file });
    }
  }

  generateTicketID(): string {
    return 'TICKET-' + uuidv4();
  }

  getCurrentDate(): string {
    return new Date().toISOString();
  }

  onSubmit(): void {
    if (this.ticketForm.invalid) return;

    const ticketId = this.generateTicketID();
    const createdDate = this.getCurrentDate();

    // ✅ Extract Point of Contact info
    const poc = {
      companyName: this.ticketForm.value.companyName,
      contactPerson: this.ticketForm.value.contactPerson,
      email: this.ticketForm.value.email,
      phone: this.ticketForm.value.phone,
      address: this.ticketForm.value.address,
      city: this.ticketForm.value.city,
      storeLocation: this.ticketForm.value.storeLocation,
    };

    // ✅ Extract Device data info
    const deviceData = {
      modelNumber: this.ticketForm.value.modelNumber,
      serialNumber: this.ticketForm.value.serialNumber,
      problemType: this.ticketForm.value.problemType,
      hardwareType: this.ticketForm.value.hardwareType,
      problemDescription: this.ticketForm.value.problemDescription,
    };

    // ✅ Combine into full Ticket object
    const ticket = {
      ticketId,
      createdDate,
      poc,
      deviceData,
    };

    console.log('Full Ticket:', ticket);

    // ✅ Create FormData for upload
    const formData = new FormData();
    formData.append('ticketId', ticketId);
    formData.append('createdDate', createdDate);

    // Append POC and Device data as strings (can be changed to JSON if backend supports)
    formData.append('poc', JSON.stringify(poc));
    formData.append('deviceData', JSON.stringify(deviceData));

    // Append file uploads
    const uploadImage1 = this.ticketForm.get('uploadImage1')?.value;
    const uploadImage2 = this.ticketForm.get('uploadImage2')?.value;
    if (uploadImage1) formData.append('uploadImage1', uploadImage1);
    if (uploadImage2) formData.append('uploadImage2', uploadImage2);

    // ✅ Submit ticket
    this.ticketService.createTicket(formData).subscribe({
      next: () => alert('Ticket submitted successfully'),
      error: (err) => alert('Submission failed: ' + err),
    });
  }
}
// This component handles the creation of new tickets, including form validation and file uploads.
// It uses reactive forms for better control and validation.
