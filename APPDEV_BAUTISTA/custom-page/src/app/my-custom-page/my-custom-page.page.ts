import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-custom-page',
  templateUrl: './my-custom-page.html',
  styleUrls: ['./my-custom-page.page.scss'],
})
export class MyCustomPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToIdByEvent(){
  this.router.navigate(['my-custom-page/custom-page-with-id/2']);
  }

}
