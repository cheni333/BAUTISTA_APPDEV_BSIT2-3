import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  NumArray = 0;
  ObjArray = ["0"];

  data: String = '';
  LoadingText: String = 'Loading...';
  isLoading: boolean = true;
 
  promise2 = this.dataService.fetchData();

  constructor(
    private AuthenticationService: AuthenticationService,
    private dataService: DataService  
 ) {
  dataService.fetchData().then (data => {
    console.log(data);
  }).catch(error => {
    console.log(error.message);

  }).finally (() => {
    this.isLoading = false;
  });
 
 }
 
  authenticate(){
    this.AuthenticationService.authenticate = true;
  }
  unauthenticate() {
    this.AuthenticationService.authenticate = false;
   
  }

  showObject(){
    if (this.AuthenticationService.authenticate) {
      console.log(this.ObjArray);
    }
   else{
    alert("Please authenticate first.");
   }
  }

  addToObject() {
    if (this.AuthenticationService.authenticate) {
      this. ObjArray = [...this. ObjArray, this. NumArray.toString()];
      this. NumArray +=1;
    }
    else{
      alert("Please authenticate first.");
      
     }

  }

}
