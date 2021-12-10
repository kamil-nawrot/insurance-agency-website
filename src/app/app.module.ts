import { NgModule } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/elements/header/header.component';
import { MainMenuComponent } from './components/elements/header/main-menu/main-menu.component';
import { AlertComponent } from './components/elements/alert/alert.component';
import { OfferTileComponent } from './components/homepage/offer-section/offer-tile/offer-tile.component';
import { BrandTileComponent } from './components/homepage/brands-section/brand-tile/brand-tile.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { MapComponent } from './components/homepage/contact-section/map/map.component';
import { OfferSectionComponent } from './components/homepage/offer-section/offer-section.component';
import { ContactSectionComponent } from './components/homepage/contact-section/contact-section.component';
import { BrandsSectionComponent } from './components/homepage/brands-section/brands-section.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { QuestionListComponent } from './components/contact/question-list/question-list.component';
import { QuestionComponent } from './components/contact/question-list/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    AlertComponent,
    OfferTileComponent,
    BrandTileComponent,
    FooterComponent,
    MapComponent,
    OfferSectionComponent,
    ContactSectionComponent,
    BrandsSectionComponent,
    HomepageComponent,
    QuestionListComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScullyLibModule,
    GoogleMapsModule,
    RouterModule.forRoot([
      { path: "", component: HomepageComponent },
      { path: "kontakt", component: QuestionListComponent },
      { path: "*", redirectTo: "/" }
    ]),
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
