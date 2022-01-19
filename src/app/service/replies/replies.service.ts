import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/object/replies/comment';

@Injectable({
  providedIn: 'root'
})
export class RepliesService {

  GetHeader(){
    const token = localStorage.getItem('token');
    return token? new HttpHeaders().set("Authorization",'Bearer '+ token) : null;
  }

  constructor(private HttpClient : HttpClient) { }

  GetAll(id : string){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/discussion/get-replies?size=10&page=0&postId='+id,{headers:headers});
      return this.HttpClient.get('https://aee-mobile.herokuapp.com/api/u/discussion/get-replies?size=10&page=0&postId='+id);
  }

  Create(comment : Comment){
    let headers = this.GetHeader();
    if(headers instanceof HttpHeaders)
      return this.HttpClient.post('https://aee-mobile.herokuapp.com/api/u/discussion/reply-post',comment,{headers:headers});
      return this.HttpClient.post('https://aee-mobile.herokuapp.com/api/u/discussion/reply-post',comment);
  }
}
