import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../core/service/ticket-service';
import { Ticket } from '../core/model/ticket';
import { first } from 'rxjs/operators';
import { TicketStatusEnum } from '../core/model/ticket-status.enum';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {
  public TicketStatusEnum: any = TicketStatusEnum;
  ticket: Ticket;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ticketService: TicketService) { }

  ngOnInit() {
    let ticketId = window.localStorage.getItem("editTicketId");
    if(!ticketId) {
      alert("Invalid action.")
      this.router.navigate(['ticket-list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      created_at: []
    });

    this.ticketService.getById(+ticketId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.ticketService.update(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Ticket updated successfully.');
            this.router.navigate(['list-ticket']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }
}
