import { Data } from './../../object/universities/data';
import { Universities } from './../../object/universities/universities';
import { UniversitiesService } from './../../service/universities/universities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {

  ListOfUnis !: Data[];
  constructor(private UniversitiesService : UniversitiesService) {
    if(localStorage.getItem('token') == null){
      window.location.href="http://localhost:4200/login";
    }
  }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.UniversitiesService.GetAll().subscribe(data=>{
      let value = data as Universities;
      this.ListOfUnis = value.data;
    });
  }

  ShowMajor(id : bigint){
    localStorage.setItem('UniID', id.toString());
    window.location.href="http://localhost:4200/major";
  }
}
