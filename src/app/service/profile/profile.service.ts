import { Password } from './../../object/profile/Password';
import { ChangePassword } from './../../object/profile/ChangePassword';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  GetHeader(){
    const token = localStorage.getItem('token');
    return token? new HttpHeaders().set("Authorization",'Bearer '+ token) : null;
  }

  constructor(private HttpClient : HttpClient) { }

  GetAll(){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/profile',{headers:headers});
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/profile');
  }

  ChangePassword(Password : Password){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.post('https://aee-mobile.herokuapp.com/api/u/change-password',Password,{headers:headers});
      return this.HttpClient.post('https://aee-mobile.herokuapp.com/api/u/change-password',Password);
  }

  GetFavorite(){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/get-favorite',{headers:headers});
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/get-favorite');
  }
}
