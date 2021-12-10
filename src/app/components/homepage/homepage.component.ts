import { Component, OnInit } from '@angular/core';
import {ContentLoaderService, HomepageData} from "../../services/content-loader.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  baseUrl: string = environment.baseCmsUrl
  homepageContent: HomepageData | undefined

  constructor(private contentLoaderService: ContentLoaderService) {
    this.contentLoaderService.getHomepageContent$().subscribe(content => {
      this.homepageContent = content
      console.log(this.homepageContent)

    })
  }

  ngOnInit() {}

}
