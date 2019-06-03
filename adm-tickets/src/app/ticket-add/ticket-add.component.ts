import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../core/service/ticket-service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.scss']
})
export class TicketAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ticketService: TicketService
  ) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      created_at: []
    });

  }

  onSubmit() {
    this.ticketService.create(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['ticket-list']);
      });
  }

}
