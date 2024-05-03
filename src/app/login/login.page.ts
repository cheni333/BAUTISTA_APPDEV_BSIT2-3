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

  constructor(private router: Router, private auth: AuthService) { }


  ngOnInit() {
  }

  login(){
    this.auth.login(this.email, this.password) 
    this.email = '';
    this.password= '';
  };

}

