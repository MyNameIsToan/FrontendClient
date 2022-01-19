import { DataMajor } from './../../object/major/data';
import { Password } from './../../object/profile/Password';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from './../../service/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/object/profile/data';
import { Profile } from 'src/app/object/profile/profile';
import { ChangePassword } from 'src/app/object/profile/ChangePassword';
import { Major } from 'src/app/object/major/major';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ChangePassword!: number;
  profile !: Data;
  ChangePassForm!: FormGroup;
  ListOfMajor !: DataMajor[];
  Message!:string;
  constructor(private ProfileService: ProfileService) {
    if(localStorage.getItem('token') == null){
      window.location.href="http://localhost:4200/login";
    }
    this.ChangePassForm = new FormGroup({
      'OldPassword': new FormControl(null, Validators.required),
      'NewPassword': new FormControl(null, Validators.required),
      'Repeat':new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
    this.ChangePassword = 0;
    this.GetAll();
    this.GetFavorite();
  }

  GetAll(){
    this.ProfileService.GetAll().subscribe(data=>{
      let value = data as Profile;
      this.profile = value.data;
    });
  }

  ChangePasswordFunction(){
    this.ChangePassword =1;
  }

  CancelChangePasswordFunction(){
    console.log(this.ChangePassword);
    this.ChangePassword = 0;
  }

  OnSubmit(){
    if(this.ChangePassForm.invalid){
      console.log('invalid');
      this.Message = "Đã có lỗi";
      return;
    }
    this.ChangePasswordRequest();
    this.ChangePassword = 0;
  }

  ChangePasswordRequest(){
    var Pass = new Password();
    if(this.ChangePassForm.controls['NewPassword'].value ==this.ChangePassForm.controls['Repeat'].value )
    {
      Pass.oldPassword = this.ChangePassForm.controls['OldPassword'].value;
      Pass.newPassword = this.ChangePassForm.controls['NewPassword'].value;
      console.log(Pass);
      this.ProfileService.ChangePassword(Pass).subscribe(data=>{
        let value = data as ChangePassword;
        this.Message = value.message;
      });
    }else{
      this.Message = "Mật khẩu không trùng khớp";
    }
  }

  GetFavorite(){
    this.ProfileService.GetFavorite().subscribe(data=>{
      let value = data as Major;
      this.ListOfMajor = value.data;
      console.log(this.ListOfMajor);
    });
  }
}
