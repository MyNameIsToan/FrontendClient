import { Comment } from './../../object/forum/comment';
import { FormGroup, FormControl } from '@angular/forms';
import { ForumService } from './../../service/forum/forum.service';
import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/object/forum/data';
import { Forum } from 'src/app/object/forum/forum';
import { Search } from 'src/app/object/forum/search';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  SearchCondition!:string;
  CreateForm !: FormGroup;
  ListOfPosts!: Data[];
  SearchForm!: FormGroup;
  constructor(private ForumService: ForumService ) {
    if(localStorage.getItem('token') == null){
      window.location.href="http://localhost:4200/login";
    }
    this.CreateForm = new FormGroup({
      'Content': new FormControl(null),
      'Title': new FormControl(null)
    })
    this.SearchForm = new FormGroup({
      'Search': new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.ForumService.GetAll().subscribe(data=>{
      let value = data as Forum;
      this.ListOfPosts = value.data;
    });
  }

  ShowReplies(id : bigint, title : string, content : string){
    localStorage.setItem('postID', id.toString());
    localStorage.setItem('postcontent', content);
    localStorage.setItem('posttitle',title);
    window.location.href="http://localhost:4200/replies";
  }

  OnSubmit(){
      var comment = new Comment();
      comment.title = this.CreateForm.controls['Title'].value;
      comment.content = this.CreateForm.controls['Content'].value;
      console.log(comment);
      this.ForumService.Create(comment).subscribe();
      window.location.reload();
  }

  Search(){
    console.log(this.SearchForm.controls['Search'].value);
    this.ForumService.Search(this.SearchForm.controls['Search'].value).subscribe(data=>{
      let value = data as Search
      this.ListOfPosts = value.data;
    });
  }

  OnSearch(){
    this.Search();
  }
}
