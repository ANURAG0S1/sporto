import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupRoutingModule } from './meetup-routing.module';
import { MeetupDetailComponent } from './components/meetup-detail/meetup-detail.component';



@NgModule({
  declarations: [
    MeetupDetailComponent
  ],
  imports: [
    CommonModule,MeetupRoutingModule
  ]
})
export class MeetupModule { }
