import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileSliderComponent } from './components/mobile-slider/mobile-slider.component';
import { FormsModule } from '@angular/forms';
import { DesktopSliderComponent } from './desktop-slider/desktop-slider.component';
import { AddToCardModalComponent } from './add-to-card-modal/add-to-card-modal.component';

@NgModule({
  declarations: [AppComponent, MobileSliderComponent, DesktopSliderComponent, AddToCardModalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
