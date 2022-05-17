import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css'],
})
export class DropdownsComponent implements OnInit {
  constructor() {}
  @Input() shows: any;
  @Input() flightDetails: any;

  ngOnInit(): void {}

  showDiv: boolean = true;

  check: string = '1';
  onClick(e: any) {
    this.check = e;
  }
}
