import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // user_ctd3qcmG4YfNL1LUZY0p5

  constructor() { }

  ngOnInit(): void {
  }
  
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('18106120', 'template_WDphM576', e.target as HTMLFormElement, 'user_ctd3qcmG4YfNL1LUZY0p5')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}


