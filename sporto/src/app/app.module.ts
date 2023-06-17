import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './modules/components/footer/footer.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule,MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
