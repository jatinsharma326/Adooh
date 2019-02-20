import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  driverDashboard() {
    this.router.navigate(['/ourwork']);
  }
}
