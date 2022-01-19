import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/object/forum/comment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  GetHeader(){
    const token = localStorage.getItem('token');
    return token? new HttpHeaders().set("Authorization",'Bearer '+ token) : null;
  }

  constructor(private HttpClient : HttpClient) { }

  GetAll(){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/discussion/get-posts?page=0&size=5',{headers:headers});
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/discussion/get-posts?page=0&size=5');
  }

  Create(comment : Comment){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.post('https://aee-mobile.herokuapp.com/api/u/discussion/create-post', comment,{headers:headers});
      return this.HttpClient.post('https://aee-mobile.herokuapp.com/api/u/discussion/create-post', comment);
  }

  Search(id : string){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/discussion/find-post?postId='+id,{headers:headers});
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/discussion/find-post?postId='+id);
  }
}
