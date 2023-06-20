import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './modules/components/footer/footer.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { UniversalDeviceDetectorService } from './_shared/providers/device-detector/device-detector.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterAlertComponent } from './modules/components/toaster-alert/toaster-alert.component';
import { SelectSportComponent } from './modules/select-sport/select-sport.component';

import { FooterService } from './_shared/providers/footer/footer.service';
import { TrendingComponent } from './modules/components/trending/trending.component';
import { MainComponent } from './modules/components/news/main.component';


@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, SelectSportComponent, TrendingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-full-width',
      toastClass: 'toast',
      preventDuplicates: true,
      maxOpened: 1,
      autoDismiss: true,
      toastComponent: ToasterAlertComponent,
    }),
    BrowserAnimationsModule,

  ],
  providers: [UniversalDeviceDetectorService,FooterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
