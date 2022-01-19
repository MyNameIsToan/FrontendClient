import { Universities } from './../../object/universities/universities';
import { Major } from './../../object/major/major';
import { MajorService } from './../../service/major/major.service';
import { DataMajor } from './../../object/major/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit {

  ListOfMajor !: DataMajor[];
  Message!:string;
  constructor(private MajorService : MajorService ) {
    if(localStorage.getItem('token') == null){
      window.location.href="http://localhost:4200/login";
    }
  }

  ngOnInit(): void {
    let id = this.GetID();
    if(id != null){
      this.GetAll(id);
    }
  }

  GetID(){
    const UniID = localStorage.getItem('UniID');
    return UniID;
  }

  GetAll(id : string){
    this.MajorService.GetAll(id).subscribe(data=>{
      let value = data as Major;
      this.ListOfMajor = value.data;
    });
  }

  AddFavorite(ids : bigint){
    this.MajorService.AddFavorite(ids).subscribe();
    this.Message = "Thêm Thành Công";
  }
}
