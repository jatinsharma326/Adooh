import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';



@Component({
  selector: 'app-headerimage',
  templateUrl: './headerimage.component.html',
  styleUrls: ['./headerimage.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HeaderimageComponent implements OnInit {


  constructor() {
   }

  ngOnInit() {}

}
