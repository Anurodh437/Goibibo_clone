import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.component.html',
  styleUrls: ['./baggage.component.css'],
})
export class BaggageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() flightParent: any;
}
