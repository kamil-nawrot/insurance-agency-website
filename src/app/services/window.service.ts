import { Inject, Injectable, OnInit } from '@angular/core';
import { WindowObject } from "../models/WindowObject.model"
import {auditTime, fromEvent, map, Observable, pairwise, startWith} from "rxjs";

export enum ScrollDirection {
  SCROLL_UP,
  SCROLL_DOWN
}

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  windowWidth$: Observable<WindowObject>
  windowScroll$: Observable<ScrollDirection>

  constructor() {
    this.windowWidth$ = fromEvent(window, "resize").pipe(
      auditTime(100),
      map(event => {
        return <WindowObject>{
          width: (<Window>event["currentTarget"])?.innerWidth,
          height: (<Window>event["currentTarget"])?.innerHeight
        }
      })
    )
    this.windowScroll$ = fromEvent(window.document, "scroll").pipe(
      auditTime(100),
      startWith(undefined),
      map(() => {
        return window.scrollY
      }),
      pairwise(),
      map(([current, previous]) => {
        return current > previous ? ScrollDirection.SCROLL_UP : ScrollDirection.SCROLL_DOWN
      })
    )
  }
}
