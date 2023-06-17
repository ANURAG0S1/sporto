import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,HomeRoutingModule,
    ToastrModule
  ]
})
export class HomeModule { }
