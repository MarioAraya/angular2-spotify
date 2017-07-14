import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {
  public artistas: any = []
  public urlBusqueda: string = "https://api.spotify.com/v1/search"
  public urlArtista : string = "https://api.spotify.com/v1/artists"
  public token : string = "BQAr2-x-_UX_PTCaUF_-P0wSq5Fyw1DfW0vmIf0ib3-3nJ7hOHEF8J0sIBWUQNurjvTOpsTeG6cEELxHlgbmJg"


  constructor(private http:Http) { }

  getArtistas(termino: string) {
    let headers = new Headers()
    headers.append("authorization", "Bearer " +this.token)
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    // observable, vs promesa
    return this.http.get( url, { headers } ) //retorna observable
          .map( res => {
            this.artistas = res.json().artists.items;
            console.log( this.artistas )

            return this.artistas;
          })
  }

  getArtista(id: string) {
    let headers = new Headers()
    headers.append("authorization", "Bearer " + this.token)
    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } ) //retorna observable
          .map( res => {
            console.log( res.json() )
            return res.json()
          })
  }

  getTopSongs(id: string) {
    let headers = new Headers()
    headers.append("authorization", "Bearer " + this.token)
    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } ) //retorna observable
          .map( res => {
            console.log( res.json() )
            return res.json().tracks
          })
  }
}
