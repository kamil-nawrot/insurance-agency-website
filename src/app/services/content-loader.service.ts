import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Observable, Subscription} from "rxjs";

export interface HomepageData {
  created_at: Date,
  id: number,
  logo_subtitle: string,
  logo_title: string,
  hero_image: { url: string }
  published_at: Date,
  updated_at: Date
}

@Injectable({
  providedIn: 'root'
})
export class ContentLoaderService {

  constructor(private http: HttpClient) { }

  getHomepageContent$(): Observable<HomepageData> {
    return this.http.get<HomepageData>(environment.baseCmsUrl + "/home")
  }

}
