import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { GetuserComponent } from './getuser/getuser.component';

const routes: Routes = [
  {path:"",component:AdduserComponent},
  {path:"getuser",component:GetuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
