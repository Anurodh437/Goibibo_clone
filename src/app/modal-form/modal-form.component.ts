import { Component, Input, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  constructor(
    public modalRef: MDBModalRef,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}
  @Input() public flightDetails: any;

  confirm() {
    alert('Thank You! Your ticket Booked Succesfully.');
  }
}
