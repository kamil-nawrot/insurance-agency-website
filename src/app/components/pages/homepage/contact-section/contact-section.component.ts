import { Component, OnInit } from '@angular/core';
import {
  intervalToDuration,
  isWithinInterval, startOfToday, addHours, nextMonday, startOfDay
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
    if([0, 6].includes(this.currentDay.getDay())) {
      this.isOpen = false
      this.remainingTime = intervalToDuration({
        start: this.currentDay,
        end: addHours(startOfDay(nextMonday(this.currentDay)), 9)
      })
      console.log(this.currentDay)
      console.log(nextMonday(this.currentDay))
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
