import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactForm  : any ;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
   }

  ngOnInit(): void {
  }
  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      message: ['']
    });
  }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', this.contactForm.value );
  }
}


