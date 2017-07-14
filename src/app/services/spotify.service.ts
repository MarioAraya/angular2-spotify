import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {
  public artistas: any = []
  public urlBusqueda: string = "https://api.spotify.com/v1/search"
  public urlArtista : string = "https://api.spotify.com/v1/artists"


  constructor(private http:Http) { }

  getArtistas(termino: string) {
    let headers = new Headers()
    headers.append("authorization", "Bearer BQA1qRzv5Vokcs6wn2P4kqg7eXA77y9ijX7jUPskN97792eZBY9zcyXo3uzwpRyl3nJsUwzP5PyQP9Zn0mqhHw")
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
    headers.append("authorization", "Bearer BQBOEGTnadY8Dd8Zd1_k6_eeSAIh4CtUhfPD5yLMov-0GvmozGPmX2wgFeZjrwMq7cV0nprnaoiYyJbh0BYpjA")
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
    headers.append("authorization", "Bearer BQBOEGTnadY8Dd8Zd1_k6_eeSAIh4CtUhfPD5yLMov-0GvmozGPmX2wgFeZjrwMq7cV0nprnaoiYyJbh0BYpjA")
    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } ) //retorna observable
          .map( res => {
            console.log( res.json() )
            return res.json().tracks
          })
  }
}
