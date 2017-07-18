import { Component, OnInit } from '@angular/core';
import { GeolocService } from './../../services/geoloc.service';
declare var google: any;

@Component({
  selector: 'app-mapagoogle',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  lat: number = -32.9477132;
  lng: number = -60.630465800000025;

  constructor(private _geolocService:GeolocService) { }

  ngOnInit() {
    this.updateGeoloc()
    setInterval(() => {
      this.updateGeoloc()
    }, 1000);
  }

  updateGeoloc(){
    let res = this._geolocService.getGeoloc(201666);
    console.log(res)
    if (res) {
      this.lat = res.lat;
      this.lng = res.lng;
    }
  }
}