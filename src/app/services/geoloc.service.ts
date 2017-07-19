import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GeolocService {
  stgo: any = {
    lat: -33.4691, lng: -70.642
  }
  constructor(private http:Http) { }

  getGeoloc(idDispositivo: number) {
    // return this.http.get( url, { headers } ) //retorna observable
    //       .map( res => {
    //         this.artistas = res.json().artists.items;
    //         console.log( this.artistas )

    //         return this.artistas;
    //       })
    this.stgo.lat += 0.001;
    this.stgo.lng -= 0.002;
    console.log('getGeoloc');
    return this.stgo;
  }
}
