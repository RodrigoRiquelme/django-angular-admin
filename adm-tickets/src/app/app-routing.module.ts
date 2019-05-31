import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ticket-add', component: TicketAddComponent },
  { path: 'ticket-detail', component: TicketDetailComponent },
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'ticket-edit', component: TicketEditComponent },
  { path : '', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
