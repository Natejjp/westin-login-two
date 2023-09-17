import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private router: Router,
  ) {
  }

  login() {
     const correctUsername = 's40169089';
     const correctPassword = '9089WG18';

    if (this.username === correctUsername && this.password === correctPassword) {
      this.router.navigate(['/correct-page']);
      this.message = ''
    } else {
      this.message = 'Wrong username or password please try again'
    }
  }
}
