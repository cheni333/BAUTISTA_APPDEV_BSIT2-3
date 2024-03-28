import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userName: string = 'user1';
  loggedInUsername: string = ''; 

  constructor(private router: Router, private authenticationService: AuthenticationService,
   private modalController: ModalController, private alertController: AlertController,
   private toastController: ToastController ) { }

   condition = false;

  ngOnInit(): void {
    this.loggedInUsername = this.authenticationService.getLoggedInUsername();
    if (this.loggedInUsername === 'admin') {
      this.userName = 'Admin';
    } else if (this.loggedInUsername === 'user1') {
      this.userName = 'User1';
    }
  }

  logOut(): void {
    this.authenticationService.canProceed = false;
    this.router.navigate(['/login']);
  }

  async toggleModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

  async alert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Your Toast Message Here',
      duration: 2000
    });
    toast.present();
  }

  async dismissToast(){
    const toast = await this.toastController.getTop();
    if (toast) {
      toast.dismiss();
    }
  }
}
