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
  public flights: any = [];
  check: string = '1';

  showDiv: boolean = true;

  modalRef: MDBModalRef | null = null;
  constructor(
    private _flightDetails: BackendService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.flights = this._flightDetails.getFlightDetails();
  }
  onClick(e: any) {
    this.check = e;
  }

  toggleDiv(i: any) {
    this.showDiv = !this.showDiv;
  }

  openModal(flight: any) {
    const modalRef = this.modalService.open(ModalFormComponent);
    modalRef.componentInstance.flightDetails = flight;
    console.log('clicked');
    
  }
}
