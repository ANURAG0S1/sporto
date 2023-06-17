import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';



@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    StaticRoutingModule,
    MatIconModule
  ]
})
export class StaticModule { }
