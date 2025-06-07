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

export abstract class ITicketService {
  abstract getTickets(): Observable<Ticket[]>;
  abstract updateTicket(ticket: Ticket): void;
}

@Injectable({ providedIn: 'root' })
export class MockTicketService implements ITicketService {
  private tickets: Ticket[] = [
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
    'Dispatch from service Center Date': ''
  },
  {
    'Customer Name': 'Jane Smith',
    Ticket_ID: 'TCK002',
    Address: '456 Elm St',
    City: 'Gotham',
    Storelocation: 'Location 2',
    ContactNumber: '9876543210',
    CustomerEmailID: 'jane@example.com',
    ModelNo: 'ABC456',
    SerialNo: 'SN0002',
    Status: 'Accepted',
    ProblemType: 'Software',
    CreatedDate: '2023-09-15',
    WarrantyType: 'Expired',
    'Quotation Number': 'Q002',
    'Quotation Status': 'Approved',
    'Quotation Date': '2023-09-16',
    'RMA Number': 'RMA5678',
    'RMA Date': '2023-09-17',
    'Under Repair Staus': 'No',
    'Call Number': 'CALL456',
    ETA: '2023-09-25',
    'Repair Date': '2023-09-22',
    Dispatch: 'Dispatched',
    'Courier Name, OutBound Tracking ID': 'DHL123456',
    'Courier Name, InBound Tracking ID': 'UPS654321',
    'Dispatch from user Date': '2023-09-18',
    'Dispatch from service Center Date': '2023-09-23'
  },
  {
    'Customer Name': 'Bob Johnson',
    Ticket_ID: 'TCK003',
    Address: '789 Oak St',
    City: 'Star City',
    Storelocation: 'Location 1',
    ContactNumber: '5551234567',
    CustomerEmailID: 'bob@example.com',
    ModelNo: 'LMN789',
    SerialNo: 'SN0003',
    Status: 'Rejected',
    ProblemType: 'Display',
    CreatedDate: '2023-08-20',
    WarrantyType: 'Valid',
    'Quotation Number': 'Q003',
    'Quotation Status': 'Rejected',
    'Quotation Date': '2023-08-21',
    'RMA Number': 'RMA9101',
    'RMA Date': '2023-08-22',
    'Under Repair Staus': 'No',
    'Call Number': 'CALL789',
    ETA: '2023-08-30',
    'Repair Date': '',
    Dispatch: '',
    'Courier Name, OutBound Tracking ID': '',
    'Courier Name, InBound Tracking ID': '',
    'Dispatch from user Date': '',
    'Dispatch from service Center Date': ''
  },
  {
    'Customer Name': 'Alice Williams',
    Ticket_ID: 'TCK004',
    Address: '101 Pine St',
    City: 'Central City',
    Storelocation: 'Location 2',
    ContactNumber: '6667778888',
    CustomerEmailID: 'alice@example.com',
    ModelNo: 'DEF321',
    SerialNo: 'SN0004',
    Status: 'Under Repair',
    ProblemType: 'Battery',
    CreatedDate: '2023-07-10',
    WarrantyType: 'Expired',
    'Quotation Number': 'Q004',
    'Quotation Status': 'Pending',
    'Quotation Date': '2023-07-11',
    'RMA Number': 'RMA1122',
    'RMA Date': '2023-07-12',
    'Under Repair Staus': 'Yes',
    'Call Number': 'CALL012',
    ETA: '2023-07-20',
    'Repair Date': '',
    Dispatch: '',
    'Courier Name, OutBound Tracking ID': '',
    'Courier Name, InBound Tracking ID': '',
    'Dispatch from user Date': '',
    'Dispatch from service Center Date': ''
  },
  {
    'Customer Name': 'Charlie Brown',
    Ticket_ID: 'TCK005',
    Address: '202 Maple St',
    City: 'Springfield',
    Storelocation: 'Location 1',
    ContactNumber: '1112223333',
    CustomerEmailID: 'charlie@example.com',
    ModelNo: 'GHI987',
    SerialNo: 'SN0005',
    Status: 'Open',
    ProblemType: 'Keyboard',
    CreatedDate: '2023-11-01',
    WarrantyType: 'Valid',
    'Quotation Number': 'Q005',
    'Quotation Status': 'Pending',
    'Quotation Date': '2023-11-02',
    'RMA Number': 'RMA3344',
    'RMA Date': '2023-11-03',
    'Under Repair Staus': 'No',
    'Call Number': 'CALL345',
    ETA: '2023-11-10',
    'Repair Date': '',
    Dispatch: '',
    'Courier Name, OutBound Tracking ID': '',
    'Courier Name, InBound Tracking ID': '',
    'Dispatch from user Date': '',
    'Dispatch from service Center Date': ''
  },
  {
    'Customer Name': 'Diana Prince',
    Ticket_ID: 'TCK006',
    Address: '303 Birch St',
    City: 'Themyscira',
    Storelocation: 'Location 2',
    ContactNumber: '4445556666',
    CustomerEmailID: 'diana@example.com',
    ModelNo: 'JKL654',
    SerialNo: 'SN0006',
    Status: 'Accepted',
    ProblemType: 'Camera',
    CreatedDate: '2023-06-12',
    WarrantyType: 'Expired',
    'Quotation Number': 'Q006',
    'Quotation Status': 'Approved',
    'Quotation Date': '2023-06-13',
    'RMA Number': 'RMA5566',
    'RMA Date': '2023-06-14',
    'Under Repair Staus': 'Yes',
    'Call Number': 'CALL678',
    ETA: '2023-06-20',
    'Repair Date': '2023-06-19',
    Dispatch: 'Dispatched',
    'Courier Name, OutBound Tracking ID': 'FedEx789123',
    'Courier Name, InBound Tracking ID': 'BlueDart321654',
    'Dispatch from user Date': '2023-06-15',
    'Dispatch from service Center Date': '2023-06-21'
  },
  {
    'Customer Name': 'Clark Kent',
    Ticket_ID: 'TCK007',
    Address: '404 Cedar St',
    City: 'Smallville',
    Storelocation: 'Location 1',
    ContactNumber: '7778889999',
    CustomerEmailID: 'clark@example.com',
    ModelNo: 'MNO321',
    SerialNo: 'SN0007',
    Status: 'Rejected',
    ProblemType: 'Motherboard',
    CreatedDate: '2023-05-18',
    WarrantyType: 'Valid',
    'Quotation Number': 'Q007',
    'Quotation Status': 'Rejected',
    'Quotation Date': '2023-05-19',
    'RMA Number': 'RMA7788',
    'RMA Date': '2023-05-20',
    'Under Repair Staus': 'No',
    'Call Number': 'CALL901',
    ETA: '2023-05-25',
    'Repair Date': '',
    Dispatch: '',
    'Courier Name, OutBound Tracking ID': '',
    'Courier Name, InBound Tracking ID': '',
    'Dispatch from user Date': '',
    'Dispatch from service Center Date': ''
  },
    // },
    // Additional mock tickets...
  ];

  getTickets(): Observable<Ticket[]> {
    return of(this.tickets);
  }

  updateTicket(ticket: Ticket): void {
    const index = this.tickets.findIndex(t => t.Ticket_ID === ticket.Ticket_ID);
    if (index !== -1) {
      this.tickets[index] = { ...ticket };
    }
  }
}

@Injectable({ providedIn: 'root' })
export class ApiTicketService implements ITicketService {
  getTickets(): Observable<Ticket[]> {
    throw new Error('Method not implemented.');
  }

  updateTicket(ticket: Ticket): void {
    throw new Error('Method not implemented.');
  }
}