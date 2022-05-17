import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}
  getFlightDetails() {
    return [
      {
        id: 0,
        flightName: 'Vistara',
        flightLogo: '../assets/vistara.jpg',
        duration: '2h 20m',
        departure: '17:45',
        departLoc: 'DEL',
        departFullLoc: 'New Delhi, India',
        price: 6253,
        emiPrice: 2085,
        arrival: '20:05',
        arrivalLoc: 'BOM',
        arrivalFullLoc: 'Mumbai, India',
        flightNum: 'UK-945',
        airportSName: 'Indira Gandhi International Airport, India',
        airportEName: 'Chhatrapati Shivaji International Airport, India',
      },
      {
        id: 1,
        flightName: 'SpiceJet',
        flightLogo: '../assets/spicejet.png',
        duration: '2h 15m',
        departure: '18:35',
        departLoc: 'DEL',
        departFullLoc: 'New Delhi, India',
        price: 9706,
        emiPrice: 2592,
        arrival: '20:50',
        arrivalLoc: 'BOM',
        arrivalFullLoc: 'Mumbai, India',
        flightNum: 'SG-8169',
        airportSName: 'Indira Gandhi International Airport, India',
        airportEName: 'Chhatrapati Shivaji International Airport, India',
      },
      {
        id: 2,
        flightName: 'SpiceJet',
        flightLogo: '../assets/spicejet.png',
        duration: '2h 20m',
        departure: '19:45',
        departLoc: 'DEL',
        departFullLoc: 'New Delhi, India',
        price: 2354,
        emiPrice: 2592,
        arrival: '22:05',
        arrivalLoc: 'BOM',
        arrivalFullLoc: 'Mumbai, India',
        flightNum: 'SG-8169',
        airportSName: 'Indira Gandhi International Airport, India',
        airportEName: 'Chhatrapati Shivaji International Airport, India',
      },
    ];
  }
}
