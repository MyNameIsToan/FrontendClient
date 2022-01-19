import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  GetHeader(){
    const token = localStorage.getItem('token');
    return token? new HttpHeaders().set("Authorization",'Bearer '+ token) : null;
  }

  constructor(private HttpClient : HttpClient) { }

  GetAll(){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/list-university?page=0&size=10',{headers:headers});
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/list-university?page=0&size=10');
  }
}
