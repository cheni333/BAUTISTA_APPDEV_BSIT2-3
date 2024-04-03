import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { SliderComponent } from '../slider/slider.component';
import { ModalComponent } from '../modal/modal.component';
import { TabsComponent } from '../tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    
  ],
  declarations: [DashboardPage, SliderComponent, ModalComponent, TabsComponent ]
})
export class DashboardPageModule {}
