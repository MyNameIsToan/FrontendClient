import { Comment } from './../../object/replies/comment';
import { FormGroup, FormControl } from '@angular/forms';
import { Data } from './../../object/replies/data';
import { RepliesService } from './../../service/replies/replies.service';
import { Component, OnInit } from '@angular/core';
import { Replies } from 'src/app/object/replies/replies';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {

  CreateForm!: FormGroup;
  ListOfReplies !: Data[];
  post_content!:string;
  post_title!:string;
  constructor(private RepliesService: RepliesService ) {
    if(localStorage.getItem('token') == null){
      window.location.href="http://localhost:4200/login";
    }
    this.CreateForm = new FormGroup({
      'Comment': new FormControl(null)
    })
  }

  ngOnInit(): void {
    let id = this.GetID();
    let content = this.GetContent();
    let title = this.GetTitle();
    if( content != null && title != null){
      this.post_content = content;
      this.post_title = title;
    }
    if(id != null){
      this.GetAll(id);
    }
  }

  GetID(){
    const postID = localStorage.getItem('postID');
    return postID;
  }

  GetContent(){
    const postcontent = localStorage.getItem('postcontent');
    return postcontent;
  }

  GetTitle(){
    const posttitle = localStorage.getItem('posttitle');
    return posttitle;
  }

  GetAll(id : string){
    this.RepliesService.GetAll(id).subscribe(data=>{
      let value = data as Replies
      this.ListOfReplies = value.data;
    });
  }

  OnSubmit(){
    var comment = new Comment();
    let id = this.GetID();
    if(id != null){
      comment.postId = parseInt(id);
      comment.content = this.CreateForm.controls['Comment'].value;
      console.log(this.CreateForm.controls['Comment'].value);
      console.log(comment);
      this.RepliesService.Create(comment).subscribe();
      window.location.reload();
    }
  }
}
