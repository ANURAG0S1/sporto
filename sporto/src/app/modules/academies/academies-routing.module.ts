import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademiesComponent } from './academies.component';
import { MainComponent } from './components/main/main.component';
import { AcademyDetailsComponent } from './components/academy-details/academy-details.component';




const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'details',
    component: AcademyDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademiesRoutingModule { }
