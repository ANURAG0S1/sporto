import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 

  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'academies',
    loadChildren: () =>
      import('./modules/academies/academies.module').then(
        (m) => m.AcademiesModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./modules/events/events.module').then(
        (m) => m.EventsModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./modules/news/news.module').then(
        (m) => m.NewsModule
      ),
  },
  {
    path: 'meetup',
    loadChildren: () =>
      import('./modules/meetup/meetup.module').then(
        (m) => m.MeetupModule
      ),
  },
  {
    path: 'static',
    loadChildren: () =>
      import('./modules/static/static.module').then(
        (m) => m.StaticModule
      ),
  },
  {
    path: '*',
    loadChildren: () =>
      import('./modules/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
 
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
