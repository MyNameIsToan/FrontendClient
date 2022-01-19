import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { NewsComponent } from './component/news/news.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ForumComponent } from './component/forum/forum.component';
import { RepliesComponent } from './component/replies/replies.component';
import { UniversitiesComponent } from './component/universities/universities.component';
import { MajorComponent } from './component/major/major.component';
import { RegisterComponent } from './component/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsComponent,
    ProfileComponent,
    ForumComponent,
    RepliesComponent,
    UniversitiesComponent,
    MajorComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
