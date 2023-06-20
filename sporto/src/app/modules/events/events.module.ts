import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';
import { MainComponent } from './components/main/main.component';
import { EventsComponent } from './events.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    EventsDetailComponent,
    EventsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,EventsRoutingModule,MatIconModule
  ]
})
export class EventsModule { }
