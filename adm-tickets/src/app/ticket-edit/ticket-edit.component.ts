import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../core/service/ticket-service';
import { Ticket } from '../core/model/ticket';
import { first } from 'rxjs/operators';
import { TicketStatusEnum } from '../core/model/ticket-status.enum';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {

  public TicketStatusEnum: any = TicketStatusEnum;

  public ticket: Ticket;

  public editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ticketService: TicketService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return;
    }

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
          alert('Ticket updated successfully.');
          this.router.navigate(['ticket-list']);
        },
        error => {
          alert(error);
        });
  }
}
