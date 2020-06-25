import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {
    this.user = sessionStorage.getItem("auto-ui-user")
    if (this.user) {
      this.loggedin = true;
    }
  }

  loggedin:boolean = false;
  user:string;
}
