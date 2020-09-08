import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingComponent } from './body/booking/booking.component';
import { ContactComponent } from './body/contact/contact.component';
import { FacilityserviceComponent } from './body/facilityservice/facilityservice.component';
import { FooddrinkComponent } from './body/fooddrink/fooddrink.component';
import { RoomComponent } from './body/room/room.component';
import { HomeComponent } from './home/home.component';
import { FacilitydetailComponent } from './body/facilityservice/facilitydetail/facilitydetail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'room', component: RoomComponent},
  {path: 'facility', component: FacilityserviceComponent},
  {path: 'food', component: FooddrinkComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'booking', component: BookingComponent},
  {path:'facilitydetail',component:FacilitydetailComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
