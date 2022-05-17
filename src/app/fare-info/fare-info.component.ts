import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fare-info',
  templateUrl: './fare-info.component.html',
  styleUrls: ['./fare-info.component.css'],
})
export class FareInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() flightParent: any;
}
