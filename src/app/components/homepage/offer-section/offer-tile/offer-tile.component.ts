import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-offer-tile',
  templateUrl: './offer-tile.component.html',
  styleUrls: ['./offer-tile.component.css']
})
export class OfferTileComponent implements OnInit {

  imgSrc = environment.baseCmsUrl + "/uploads/offer_tile_home_86d826c110.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
