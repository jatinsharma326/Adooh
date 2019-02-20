import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.css']
})
export class GmapsComponent implements OnInit {


  public title = 'My first AGM project';
  public lat = 51.678418;
  public lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
