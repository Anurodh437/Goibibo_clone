import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FareInfoComponent } from './fare-info/fare-info.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsComponent } from './flights/flights.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'flight_booking', component: FlightsComponent },
  { path: 'flight_booking/flightInfo', component: FlightDetailsComponent },
  { path: 'flight_booking/fareInfo', component: FareInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
