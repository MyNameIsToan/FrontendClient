import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Login } from 'src/app/object/login/login';
import { Users } from 'src/app/object/login/users';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token!: string
  condition_login !: boolean;
  condition !: number;
  Error !: boolean;
  Error1 !: boolean;
  LoginForm!: FormGroup;
  constructor(private AuthService: AuthService, private Router : Router) {
    this.LoginForm = new FormGroup({
      'Email': new FormControl(null, Validators.required),
      'Password': new FormControl(null, Validators.required)
    })
    this.condition = 0;
  }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.condition_login = true;
    this.Error = false;
    this.Error1 = false;
    if(this.LoginForm.invalid){
      console.log('invalid');
      this.condition_login = false;
      this.Error = true;
      return;
    }
    this.Error = false;
    this.Login();
  }

  async Login(){
    var users = new Users();
    users.email = this.LoginForm.controls['Email'].value;
    users.password = this.LoginForm.controls['Password'].value;
    console.log(users);
    this.AuthService.Login(users).subscribe(data=>{
      let value = data as Login;
      this.token = value.data.token;
      localStorage.setItem('token', value.data.token);

    });
    await new Promise(f => setTimeout(f, 3000));
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      this.Error1 = true;
      this.condition_login = false;
    }else{
      console.log("success");
      setTimeout( () => { window.location.href = "http://localhost:4200/news";  }, 3000 );
    }
  }
}
