import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email: string = '';
password: string = '';

  constructor(private auth: AuthService, private router: Router
  ){ }

  login(){
  this.auth.login(this.email, this.password) 
};

  ngOnInit() {
  }

}
