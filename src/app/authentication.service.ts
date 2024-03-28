import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedInUsername: string = '';
  canProceed = false;
  constructor() { }

  canActivate() {
    return this.canProceed
  }
  
  getLoggedInUsername(): string {
    return this.loggedInUsername;
  }

}
