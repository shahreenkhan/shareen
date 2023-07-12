import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurdRoutingModule } from './curd-routing.module';
import { DisplayComponent } from './display/display.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    DisplayComponent,
    ViewComponent,
    UpdateComponent,
    ImagesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
     FormsModule,
    ReactiveFormsModule,
    CurdRoutingModule
  ]
})
export class CurdModule { }
