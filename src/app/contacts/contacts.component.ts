import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  isFormSubmitted: boolean = false;

  contactForm: FormGroup;
  constructor(protected formService: FormService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      contactInfo: new FormControl(undefined, Validators.required),
      message: new FormControl(undefined, Validators.required),
    });
  }

  


  onSubmitContactForm() {
    const {contactInfo, message} = this.contactForm.value;
    if (contactInfo && message) {
      const form = document.forms["devdenise-form"];
      this.formService.submitForm(new FormData(form)).then((resp) => {
        console.log(resp);
        this.isFormSubmitted= true;
      }).catch((err) => console.log(err))
    }
  }

}
