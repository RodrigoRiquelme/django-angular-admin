import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  logout() {
    this.authService.logout().subscribe(
      () => {
        this.router.navigate(['login']);
      }
    );
  }

}
