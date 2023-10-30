import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  company: string = '';
  ruc: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  acceptedPrivacyPolicy: boolean = false;
}
