import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightsComponent } from '../flights/flights.component';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent implements OnInit {
  @ViewChild(FlightsComponent, { static: true }) child!: FlightsComponent;
  public num: any;
  callingSortingFun(type: any):any {
    this.num = type;
    this.child.sortDetails(type);
  }

  constructor() {}
  ngOnInit(): void {}
}
