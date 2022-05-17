import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css'],
})
export class CancellationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() flightParent: any;

}
