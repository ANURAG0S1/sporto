import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetupComponent } from './components/main/meetup.component';
import { MeetupDetailComponent } from './components/meetup-detail/meetup-detail.component';



const routes: Routes = [
  {
    path: '',
    component: MeetupComponent,
  },
  {
    path: 'details/:meetup_id',
    component: MeetupDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetupRoutingModule { }
