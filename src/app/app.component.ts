import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend Client';
  Condition!: number;
  constructor(){
    if(localStorage.getItem('token')==null){
      this.Condition = 0;
    }else{
      this.Condition = 1;
    }
    console.log(this.Condition);
  }

  Logout(){
    localStorage.removeItem("token");
    this.Condition = 0;
    window.location.href="http://localhost:4200/login";
  }
}
