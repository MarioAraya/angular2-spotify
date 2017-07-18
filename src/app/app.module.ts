import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SpotifyService } from './services/spotify.service';
import { GeolocService } from './services/geoloc.service';

import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { ChartComponent } from './components/chartjs/chartjs.component';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { APP_ROUTING } from './app.routes';

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyBm1PgqIiC9tIqHBAXhGJWypX9wOGdjttc',
});

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistaComponent,
    DomseguroPipe,
    ChartComponent,
    MapaComponent
  ],
  imports: [
    APP_ROUTING,
    FormsModule,
    HttpModule,
    BrowserModule,
    ChartsModule,
    googleMapsCore
  ],
  providers: [
    SpotifyService,
    GeolocService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
