import { Component, OnInit } from '@angular/core';
import { Ticket } from '../core/model/ticket';
import { TicketService } from '../core/service/ticket-service';
import { TicketStatusEnum } from '../core/model/ticket-status.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[];

  public TicketStatusEnum: any = TicketStatusEnum;

  constructor(
    private router: Router,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.ticketService
      .getAll()
      .subscribe((data: Ticket[]) => {
        this.tickets = data;
      });
  }

  delete(ticket: Ticket) {
    if (confirm(`¿Borrar ticket ${ticket.id}?`)) {
      this.ticketService.delete(ticket).subscribe(res => {
        this.tickets = this.tickets.filter(t => t.id !== ticket.id);
      });
    }
  }

  edit(ticket: Ticket): void {
    window.localStorage.removeItem("editTicketId");
    window.localStorage.setItem("editTicketId", ticket.id.toString());
    this.router.navigate(['ticket-edit']);
  };

  add(): void {
    this.router.navigate(['ticket-add']);
  };
}
