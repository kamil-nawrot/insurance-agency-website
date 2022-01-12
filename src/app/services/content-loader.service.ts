import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Observable, Subscription} from "rxjs";

export interface HomepageData {
  data: {
    id: number,
    attributes: {
      created_at: Date,
      logo_subtitle: string,
      logo_title: string,
      hero_image: any,
      published_at: Date,
      updated_at: Date
    }
  }
}

export interface Response {
  data: {
    id: number,
    attributes: {
      created_at: Date,
      published_at: Date,
      updated_at: Date,
      [otherData: string]: unknown;
    }
  },
  meta: object,
  error?: object
}

@Injectable({
  providedIn: 'root'
})
export class ContentLoaderService {

  constructor(private http: HttpClient) { }

  getHomepageContent$(): Observable<Response> {
    return this.http.get<Response>(environment.baseCmsUrl + "/home", { params: new HttpParams().set("populate", "*") })
  }

}
