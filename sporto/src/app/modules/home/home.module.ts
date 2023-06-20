import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { MainComponent } from '../components/news/main.component';


@NgModule({
  declarations: [HomeComponent,MainComponent],
  imports: [ CommonModule, HomeRoutingModule, ToastrModule],
})
export class HomeModule {}
