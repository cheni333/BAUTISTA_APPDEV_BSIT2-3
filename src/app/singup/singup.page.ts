import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  email: string = '';
  password: string = '';
  retypePassword: string = '';

  constructor(private router: Router, private auth: AuthService, private alertController: AlertController) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.email, this.password) 
  };

  signUp(){
  this.auth.signup(this.email, this.password, this.retypePassword)
    
  this.email = '';
  this.password = '';
  this.retypePassword = '';

}
}
