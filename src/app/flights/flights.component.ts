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
  public flights: any;

  modalRef: MDBModalRef | null = null;
  constructor(
    private _flightDetails: BackendService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.flights = this._flightDetails.getFlightDetails();
  }
  showDiv: boolean = true;

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

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
            a.TimeTaken > b.TimeTaken ? 1 : -1
          )
        : this.flights.sort((a: any, b: any) =>
            a.TimeTaken > b.TimeTaken ? -1 : 1
          );
    } else if (value === 3) {
      this.asc
        ? this.flights.sort((a: any, b: any) =>
            a.ArrivalTime > b.ArrivalTime ? 1 : -1
          )
        : this.flights.sort((a: any, b: any) =>
            a.ArrivalTime > b.ArrivalTime ? -1 : 1
          );
    } else if (value === 4) {
      this.asc
        ? this.flights.sort((a: any, b: any) =>
            a.TicketPrice > b.TicketPrice ? 1 : -1
          )
        : this.flights.sort((a: any, b: any) =>
            a.TicketPrice > b.TicketPrice ? -1 : 1
          );
    }
  }
}
