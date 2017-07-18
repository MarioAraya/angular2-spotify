import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-mapagoogle',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  lat: number = -32.9477132;
  lng: number = -60.630465800000025;

  constructor() { }

  ngOnInit() {
  }
}