import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  GetHeader(){
    const token = localStorage.getItem('token');
    return token? new HttpHeaders().set("Authorization",'Bearer '+ token) : null;
  }

  constructor(private HttpClient : HttpClient) { }

  GetAll(id : string){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/list-field/' + id,{headers:headers});
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/list-field/' + id);
  }

  AddFavorite(id : bigint){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.post('https://aee-mobile.herokuapp.com/api/u/add-favorite/' + id, id,{headers:headers});
      return this.HttpClient.post('https://aee-mobile.herokuapp.com/api/u/add-favorite/' + id, id);
  }
}
