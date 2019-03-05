import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/classes/users.class';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  protected users:Users;
  constructor(
    private userService:UserService, 
    ) {  }

  ngOnInit() {
  this.users=new Users();

  }
  // convenience getter for easy access to form fields
  protected addUsers() {
    if (true) {
      this.userService.addUsers(this.users)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }
  protected checkUsers() {
    if (true) {
      this.userService.checkUsers(this.users)
        .subscribe((res: any) => {
          console.log('call res', res);
          if (res==true){
          localStorage.setItem("login","true");}else
          {localStorage.setItem("login","false");}
          return res;
        });
    }
  }

}
