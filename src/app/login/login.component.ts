import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loggedIn: boolean = false;
  attemptedLogin: boolean = false;
  message: string = '';

  login() {
    // Replace 'yourUsername' and 'yourPassword' with the desired username and password
    const correctUsername = 's40169089';
    const correctPassword = '9089WG18';

    if (this.username === correctUsername && this.password === correctPassword) {
      this.loggedIn = true;
      this.attemptedLogin = false;
      this.message = 'Good job Westin! ';
      setTimeout(() => {
        this.loggedIn = false; // Reset login state after a delay
      }, 5000); // Adjust the delay as needed
    } else {
      this.loggedIn = false;
      this.attemptedLogin = true;
      this.message = 'Try Again Westin! ';
    }
  }
}
