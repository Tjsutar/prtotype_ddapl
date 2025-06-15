// core/services/api/ticket.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TicketService {
  // ✅ Fixed API URL (removed extra slash before http)
  private apiUrl = 'http://localhost:4200/api/tickets'; // Replace with actual backend URL if needed

  constructor(private http: HttpClient) {}

  // ✅ Submit ticket data as FormData
  createTicket(formData: FormData): Observable<any> {
    // For FormData, headers like 'Content-Type' should NOT be manually set.
    return this.http.post(this.apiUrl, formData);
  }
}
