import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Ticket {
  'Customer Name': string;
  Ticket_ID: string;
  Address: string;
  City: string;
  Storelocation: string;
  ContactNumber: string;
  CustomerEmailID: string;
  ModelNo: string;
  SerialNo: string;
  Status: string;
  ProblemType: string;
  CreatedDate: string;
  WarrantyType: string;
  'Quotation Number': string;
  'Quotation Status': string;
  'Quotation Date': string;
  'RMA Number': string;
  'RMA Date': string;
  'Under Repair Staus': string;
  'Call Number': string;
  ETA: string;
  'Repair Date': string;
  Dispatch: string;
  'Courier Name, OutBound Tracking ID': string;
  'Courier Name, InBound Tracking ID': string;
  'Dispatch from user Date': string;
  'Dispatch from service Center Date': string;
}

@Injectable({ providedIn: 'root' })
export class TicketMockService {
  private mockTickets: Ticket[] = [
    {
      'Customer Name': 'John Doe',
      Ticket_ID: 'TCK001',
      Address: '123 Main St',
      City: 'Metropolis',
      Storelocation: 'Location 1',
      ContactNumber: '1234567890',
      CustomerEmailID: 'john@example.com',
      ModelNo: 'XYZ123',
      SerialNo: 'SN0001',
      Status: 'Open',
      ProblemType: 'Hardware',
      CreatedDate: '2023-10-01',
      WarrantyType: 'Valid',
      'Quotation Number': 'Q001',
      'Quotation Status': 'Pending',
      'Quotation Date': '2023-10-02',
      'RMA Number': 'RMA1234',
      'RMA Date': '2023-10-03',
      'Under Repair Staus': 'Yes',
      'Call Number': 'CALL123',
      ETA: '2023-10-10',
      'Repair Date': '',
      Dispatch: '',
      'Courier Name, OutBound Tracking ID': '',
      'Courier Name, InBound Tracking ID': '',
      'Dispatch from user Date': '',
      'Dispatch from service Center Date': '',
    },
    {
      'Customer Name': 'Jane Smith',
      Ticket_ID: 'TCK002',
      Address: '456 Second St',
      City: 'Gotham',
      Storelocation: 'Location 2',
      ContactNumber: '0987654321',
      CustomerEmailID: 'jane@example.com',
      ModelNo: 'ABC456',
      SerialNo: 'SN0002',
      Status: 'Accepted',
      ProblemType: 'Software',
      CreatedDate: '2023-10-05',
      WarrantyType: 'Expired',
      'Quotation Number': 'Q002',
      'Quotation Status': 'Approved',
      'Quotation Date': '2023-10-06',
      'RMA Number': 'RMA5678',
      'RMA Date': '2023-10-07',
      'Under Repair Staus': 'No',
      'Call Number': 'CALL456',
      ETA: '2023-10-15',
      'Repair Date': '2023-10-14',
      Dispatch: 'Dispatched',
      'Courier Name, OutBound Tracking ID': 'OUT123',
      'Courier Name, InBound Tracking ID': 'INB456',
      'Dispatch from user Date': '2023-10-10',
      'Dispatch from service Center Date': '2023-10-11',
    },
    // Add more mock tickets if needed
  ];

  getTickets(): Observable<Ticket[]> {
    return of(this.mockTickets);
  }

  // Optional: methods to update mock data can be added here
}