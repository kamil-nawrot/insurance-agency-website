import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({
    "name": new FormControl(),
    "phone": new FormControl(),
    "mail": new FormControl(),
    "message": new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

}
