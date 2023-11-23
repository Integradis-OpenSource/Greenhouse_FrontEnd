import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CompanyService} from "../../../profiles/services/company.service";
import {UserService} from "../../../profiles/services/user.service";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  company: string = '';
  ruc: any = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  acceptedPrivacyPolicy: boolean = false;
  companyForm: any = {};
  employeeForm: any = {};
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles = ["ROLE_COMPANY_ADMIN"]

  constructor(private authService: AuthService, private router: Router, private companyService: CompanyService, private userService: UserService) {}

  onSubmit(): void{
    this.form = {username: this.email, password: this.password, roles: this.roles}
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    this.companyService.setBasePath();
    this.companyForm = {companyName: this.company, Tin: this.ruc};
    this.userService.setBasePath();
    this.companyService.create(this.companyForm).subscribe((response: any) => {
      this.employeeForm = {firstName: this.firstName, lastName: this.lastName, email: this.email, companyId: response.id};
      this.userService.create(this.employeeForm).subscribe((response: any) => {
        this.router.navigate(['/login']);
      });
    });
  }

}
