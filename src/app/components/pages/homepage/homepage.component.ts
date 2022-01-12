import { Component, OnInit } from '@angular/core';
import { ContentLoaderService, HomepageData, Response } from "../../../services/content-loader.service";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  baseUrl: string = environment.baseMediaUrl
  heroImage: Response | undefined

  constructor(private contentLoaderService: ContentLoaderService) {
    this.contentLoaderService.getHomepageContent$().subscribe((response: Response) => {
      this.heroImage = (<Response>response.data.attributes["hero_image"])
    })
  }

  ngOnInit() {}

}
