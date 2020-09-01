import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    const user = this.auth.login(loginForm.value)
    if (user) {
      alert('Logged In Success')
    }

    else {
      alert('Invalid Credentials')
    }
  }
}