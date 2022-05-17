import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(e: any) {
    console.log(e);
    if (e.value.userName === 'Admin' && e.value.password === 'Admin@123') {
      this.router.navigate(['flight_booking']);
    } else {
      alert('Enter Correct username and password');
    }
  }
}
