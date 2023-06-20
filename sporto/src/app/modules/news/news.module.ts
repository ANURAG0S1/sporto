import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { MainComponent } from './main/main.component';




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,NewsRoutingModule
  ]
})
export class NewsModule { }
