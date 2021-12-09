import { Component, OnInit } from '@angular/core';
import {
  intervalToDuration,
  isWithinInterval, startOfToday, addHours, nextMonday
} from "date-fns"

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  currentDay: Date = new Date()
  isOpen: boolean = false
  remainingTime: Duration = { days: 0, hours: 0, minutes: 0 }

  constructor() {
    console.log(this.currentDay)
    if([4, 5].includes(this.currentDay.getDay())) {
      this.isOpen = false
      this.remainingTime = intervalToDuration({
        start: this.currentDay,
        end: addHours(nextMonday(this.currentDay), 9)
      })
    }
    else if(isWithinInterval(this.currentDay, {
      start: addHours(startOfToday(), 9),
      end: addHours(startOfToday(), 17)
    })) {
      this.isOpen = true
      this.remainingTime = intervalToDuration({
        start: this.currentDay,
        end: addHours(startOfToday(), 17)
      })

    }
    console.log(this.remainingTime)
  }

  ngOnInit(): void {
  }

}
