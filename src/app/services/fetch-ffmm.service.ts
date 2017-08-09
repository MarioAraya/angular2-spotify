import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FetchFfmmService {

  constructor(private http: Http) { }

  fetchFFMM(){
    return this.http.get('./assets/ffmm.json').map(
      (res) => res.json()
    );
  }
}