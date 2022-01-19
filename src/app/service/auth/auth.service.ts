import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/object/login/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient : HttpClient) { }

  Login(Users : Users){
    return this.HttpClient.post('https://aee-mobile.herokuapp.com/api/auth/login', Users);
  }
}
