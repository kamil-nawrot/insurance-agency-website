import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from "@angular/google-maps";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined
  @ViewChild("marker") marker: MapMarker | undefined
  center: google.maps.LatLngLiteral = { lat: 50.82708484557933, lng: 15.786714605354224 }
  mapMarkerOptions: google.maps.MarkerOptions = {
    position: this.center
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.infoWindow!.open(this.marker)
  }

}
