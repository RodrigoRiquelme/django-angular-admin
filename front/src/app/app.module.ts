import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthInterceptor } from './core/interceptor/auth-interceptor';
import { TicketService } from './core/service/ticket-service';
import { AuthService } from './core/service/auth.service';
import { EnumToArrayPipe } from './core/pipe/enum-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketAddComponent,
    TicketEditComponent,
    LoginComponent,
    NavigationComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    TicketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
