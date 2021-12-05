import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScrollDirection, WindowService} from "../../../services/window.service";
import {auditTime, pairwise, startWith, Subscription} from "rxjs";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger("header-trigger", [
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translateY(-120px)"
        }),
        animate(500, style({
          opacity: 1,
          transform: "translateY(0)"
        }))
      ]),
      transition("* => void", [
        animate(500, style({
          opacity: 0,
          transform: "translateY(-120px)"
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  headerVisibilityState = "visible"
  windowScrollSub$: Subscription = new Subscription;

  constructor(private windowService: WindowService) { }

  ngOnInit(): void {
    this.windowScrollSub$ = this.windowService.windowScroll$.pipe(
      startWith(undefined),
      pairwise()
    ).subscribe(([scrollDirection, prevScrollDirection]) => {
      if (scrollDirection === prevScrollDirection && scrollDirection === ScrollDirection.SCROLL_DOWN) {
        this.headerVisibilityState = "hidden"
      }
      else {
        this.headerVisibilityState = "visible"
      }
    })
  }

  ngOnDestroy() {
    this.windowScrollSub$.unsubscribe()
  }

}
