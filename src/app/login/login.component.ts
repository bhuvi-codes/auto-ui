import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user:string;
  pass:string;
  msg:string;
  errmsg:string;
  login()
  {
    if((this.user=="admin") && (this.pass=="password")) {
      sessionStorage.setItem("auto-ui-user",this.user);
      this.msg = "Login Success!";
      this.errmsg = "";
      window.location.reload();
    }
    else {
      this.errmsg = "username or password incorrect!";
    }
  }
}
