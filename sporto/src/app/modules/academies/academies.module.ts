import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademiesRoutingModule } from './academies-routing.module';
import { MainComponent } from './components/main/main.component';
import { AcademiesComponent } from './academies.component';
import { AcademyDetailsComponent } from './components/academy-details/academy-details.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MainComponent,
    AcademiesComponent,
    AcademyDetailsComponent
  ],
  imports: [
    CommonModule,
    AcademiesRoutingModule,
    MatIconModule
  ]
})
export class AcademiesModule { }
