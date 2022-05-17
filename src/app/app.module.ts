import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaggageComponent } from './baggage/baggage.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { FareInfoComponent } from './fare-info/fare-info.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { LoginComponent } from './login/login.component';
import { FlightsComponent } from './flights/flights.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { FormsModule } from '@angular/forms';
import { BackendService } from './backend.service';
import { MDBBootstrapModulesPro, MDBModalRef } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { MdbModalRef, MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

@NgModule({
  declarations: [
    AppComponent,
    BaggageComponent,
    CancellationComponent,
    FareInfoComponent,
    FlightDetailsComponent,
    LoginComponent,
    FlightsComponent,
    ModalFormComponent,
    TopMenuComponent,
    DropdownsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MdbModalModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  entryComponents: [ModalFormComponent],
  providers: [BackendService, MDBSpinningPreloader, MDBModalRef],
  bootstrap: [AppComponent],
})
export class AppModule {}
