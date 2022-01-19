import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm!: FormGroup;
  constructor(private Router : Router) {
    this.RegisterForm = new FormGroup({
      'Email': new FormControl(null),
      'Password': new FormControl(null),
      'RePassword': new FormControl(null),
      'Username': new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  OnSubmit(){

  }
}
