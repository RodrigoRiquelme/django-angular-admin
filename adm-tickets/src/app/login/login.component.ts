import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';



export class LoginPayLoad {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.invalidLogin = false;
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload: LoginPayLoad = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.authService.login(loginPayload).subscribe(
      data => {
        this.invalidLogin = false;
        window.localStorage.setItem('token', data.token);
        this.router.navigate(['ticket-list']);
      },
      error => {
        console.error(error);
        this.invalidLogin = true;
      }
    );
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
