import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormService } from '../form.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  isFormSubmitted = false;
  showSpinner = false
  contactForm: FormGroup;
  
  constructor(protected formService: FormService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      contactInfo: new FormControl(undefined, Validators.required),
      message: new FormControl(undefined, Validators.required),
    });
    
  }

  


  onSubmitContactForm() {
    this.showSpinner = true;
    const {contactInfo, message} = this.contactForm.value;
    if (contactInfo && message) {
      const form = document.forms["devdenise-form"];
      this.formService.submitForm(new FormData(form)).then((resp) => {
        this.isFormSubmitted = true;
        this.showSpinner = false;
        this.spinner.hide();
        this.contactForm.reset();
      }).catch((err) => {
        console.log(err);
        this.spinner.hide();
      })
    }
  }

}
