import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileSliderComponent } from './components/mobile-slider/mobile-slider.component';
import { FormsModule } from '@angular/forms';
import { DesktopSliderComponent } from './components/desktop-slider/desktop-slider.component';
import { AddToCardModalComponent } from './components/add-to-card-modal/add-to-card-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileSliderComponent,
    DesktopSliderComponent,
    AddToCardModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
