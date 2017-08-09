import { Component, OnInit } from '@angular/core';
import { FetchFfmmService } from "../../services/fetch-ffmm.service";

@Component({
  selector: 'app-lista-ffmm',
  templateUrl: './lista-ffmm.component.html',
  styleUrls: ['./lista-ffmm.component.css']
})
export class ListaFfmmComponent implements OnInit {
  fondos: any[]

  constructor(private fetchFfmmService: FetchFfmmService) { }

  ngOnInit() {
    this.fetchFfmmService.fetchFFMM().subscribe(
      (data) => { 
        this.fondos = data.data.valoresFM;
        console.log(data.data.valoresFM)
      }
    );
  }

}