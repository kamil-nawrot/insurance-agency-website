import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { GoogleMapsModule } from "@angular/google-maps";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/elements/header/header.component';
import { MainMenuComponent } from './components/elements/header/main-menu/main-menu.component';
import { AlertComponent } from './components/elements/alert/alert.component';
import { OfferTileComponent } from './components/pages/homepage/offer-section/offer-tile/offer-tile.component';
import { BrandTileComponent } from './components/pages/homepage/brands-section/brand-tile/brand-tile.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { MapComponent } from './components/elements/map/map.component';
import { OfferSectionComponent } from './components/pages/homepage/offer-section/offer-section.component';
import { ContactSectionComponent } from './components/pages/homepage/contact-section/contact-section.component';
import { BrandsSectionComponent } from './components/pages/homepage/brands-section/brands-section.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { QuestionListComponent } from './components/pages/contact/question-list/question-list.component';
import { QuestionComponent } from './components/pages/contact/question-list/question/question.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ContactFormComponent } from './components/pages/contact/contact-form/contact-form.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { OfferComponent } from './components/pages/offer/offer.component';

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
    QuestionComponent,
    ContactComponent,
    ContactFormComponent,
    AboutMeComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScullyLibModule,
    GoogleMapsModule,
    RouterModule.forRoot([
      { path: "", component: HomepageComponent },
      { path: "kontakt", component: ContactComponent },
      { path: "oferta", component: OfferComponent },
      { path: "o-mnie", component: AboutMeComponent },
      { path: "*", redirectTo: "/" }
    ]),
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
