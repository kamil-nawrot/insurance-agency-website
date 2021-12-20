import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {WindowService} from "../../../../services/window.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, OnDestroy {

  menuItems = ["oferta", "kontakt"]
  barsIcon = faBars
  isMobileMenu = window.innerWidth < 768
  isMenuVisible = false
  windowSizeSub$: Subscription = new Subscription
  windowScrollSub$: Subscription = new Subscription;

  constructor(private windowService: WindowService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.windowSizeSub$ = this.windowService.windowWidth$.subscribe(windowSize => {
      this.isMobileMenu = windowSize.width < 768
    })
    this.windowScrollSub$ = this.windowService.windowScroll$.subscribe(scroll => {
      this.isMenuVisible = false
    })
  }

  onMenuItemClicked(event: MouseEvent): void {
    const clickedItem = (<Element>event.target)!.getAttribute("href")
    this.isMenuVisible = clickedItem === this.router.url
  }

  ngOnDestroy() {
    this.windowSizeSub$.unsubscribe()
  }

}
