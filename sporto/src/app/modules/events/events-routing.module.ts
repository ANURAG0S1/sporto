import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { MainComponent } from './components/main/main.component';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'details',
    component: EventsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
