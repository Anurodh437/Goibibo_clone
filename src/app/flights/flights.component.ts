import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  hiddenItems:any = {};
  public flights: any = [];

  modalRef: MDBModalRef | null = null;
  constructor(
    private _flightDetails: BackendService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.flights = this._flightDetails.getFlightDetails();
  }
  showDiv: boolean = true;

  openModal(flight: any) {
    const modalRef = this.modalService.open(ModalFormComponent);
    modalRef.componentInstance.flightDetails = flight;
  }

  // function to sort the details accoring to price,duration, departure time ,etc
  public asc: any;
  sortDetails(value: number) {
    console.log('clcidenfjerngjkrg');
    this.asc = !this.asc;
    if (value === 1) {
      this.asc
        ? this.flights.sort((a: any, b: any) =>
            a.departure > b.departure ? 1 : -1
          )
        : this.flights.sort((a: any, b: any) =>
            a.departure > b.departure ? -1 : 1
          );
    } else if (value === 2) {
      this.asc
        ? this.flights.sort((a: any, b: any) =>
            a.duration > b.duration ? 1 : -1
          )
        : this.flights.sort((a: any, b: any) =>
            a.duration > b.duration ? -1 : 1
          );
    } else if (value === 3) {
      this.asc
        ? this.flights.sort((a: any, b: any) =>
            a.arrival > b.arrival ? 1 : -1
          )
        : this.flights.sort((a: any, b: any) =>
            a.arrival > b.arrival ? -1 : 1
          );
    } else if (value === 4) {
      this.asc
        ? this.flights.sort((a: any, b: any) => (a.price > b.price ? 1 : -1))
        : this.flights.sort((a: any, b: any) => (a.price > b.price ? -1 : 1));
    }
  }
}
