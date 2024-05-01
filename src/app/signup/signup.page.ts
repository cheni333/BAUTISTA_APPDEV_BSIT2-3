import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  retypePassword: string = '';

  constructor(
    private alertController: AlertController, 
    private router: Router, private auth: AuthService
  ) { }

  ngOnInit() {
  }

signUp(){
this.auth.signup(this.email, this.password, this.retypePassword)

this.password = '';
this.retypePassword = ''; 
};

}




