import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/guard/auth.guard';
import { DisplayComponent } from './display/display.component';
import { ImagesComponent } from './images/images.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:"",
    component:DisplayComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"view/:id",
    component:ViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"image",
    component:ImagesComponent,
    // canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurdRoutingModule { }
