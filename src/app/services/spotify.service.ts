import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {
  public artistas: any = []
  public urlBusqueda: string = "https://api.spotify.com/v1/search"


  constructor(private http:Http) { }

  getArtistas(termino: string) {
    let headers = new Headers()
    headers.append("authorization", "Bearer BQAHzUOolTY6bz5FS2KBhZYDaMdFS-MrzqMouPjO1ppTHafsUrr1SljbRRjAgQogjXSlG8yIb4Zr6ZrpKLw_OA")
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
}
