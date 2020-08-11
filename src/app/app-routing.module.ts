import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
  // {path: '',   redirectTo: '/Home', pathMatch: 'full'},
  {path: '',   redirectTo: '/Profile', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: 'Skills', component: SkillsComponent},
  {path: 'Contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
