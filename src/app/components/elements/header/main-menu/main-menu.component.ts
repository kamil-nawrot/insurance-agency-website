import {Component, OnDestroy, OnInit} from '@angular/core';
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {WindowService} from "../../../../services/window.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, OnDestroy {

  menuItems = ["start", "oferta", "kontakt"]
  barsIcon = faBars
  isMobileMenu = window.innerWidth < 768
  isMenuVisible = false
  windowSizeSub$: Subscription = new Subscription

  constructor(private windowService: WindowService) { }

  ngOnInit(): void {
    this.windowSizeSub$ = this.windowService.windowWidth$.subscribe(windowSize => {
      this.isMobileMenu = windowSize.width < 768
    })
  }

  ngOnDestroy() {
    this.windowSizeSub$.unsubscribe()
  }

}
