import { Component, OnInit } from '@angular/core';
import { Ticket } from '../core/model/ticket';
import { TicketService } from '../core/service/ticket-service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService
      .getAll()
      .subscribe((data: Ticket[]) => {
        this.tickets = data;
      });
  }

  delete(id) {
    this.ticketService.delete(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
