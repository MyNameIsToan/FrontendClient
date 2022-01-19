import { RegisterComponent } from './component/register/register.component';
import { MajorComponent } from './component/major/major.component';
import { UniversitiesComponent } from './component/universities/universities.component';
import { RepliesComponent } from './component/replies/replies.component';
import { ForumComponent } from './component/forum/forum.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './component/news/news.component';

const routes: Routes = [
  {path:"",component: LoginComponent},
  {path:"news",component: NewsComponent},
  {path:"login",component: LoginComponent},
  {path:"forum",component: ForumComponent},
  {path:"replies",component: RepliesComponent},
  {path:"profile", component: ProfileComponent},
  {path:"universities",component: UniversitiesComponent},
  {path:"major", component: MajorComponent},
  {path:"register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
