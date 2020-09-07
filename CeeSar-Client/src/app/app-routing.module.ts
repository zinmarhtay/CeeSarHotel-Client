import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './body/room/room.component';
import { FacilityserviceComponent } from './body/facilityservice/facilityservice.component';
import { FooddrinkComponent } from './body/fooddrink/fooddrink.component';
import { ContactComponent } from './body/contact/contact.component';
import { BookingComponent } from './body/booking/booking.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'room', component: RoomComponent},
  {path: 'facility', component: FacilityserviceComponent},
  {path: 'food', component: FooddrinkComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
