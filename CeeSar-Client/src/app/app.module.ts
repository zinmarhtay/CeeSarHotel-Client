import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { FacilityserviceComponent } from './body/facilityservice/facilityservice.component';
import { FooddrinkComponent } from './body/fooddrink/fooddrink.component';
import { ContactComponent } from './body/contact/contact.component';
import { BookingComponent } from './body/booking/booking.component';
import { RouterModule } from '@angular/router';
import { RoomComponent } from './body/room/room.component';
import { FacilitydetailComponent } from './body/facilityservice/facilitydetail/facilitydetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    FacilityserviceComponent,
    FooddrinkComponent,
    ContactComponent,
    BookingComponent,
    RoomComponent,
    FacilitydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
