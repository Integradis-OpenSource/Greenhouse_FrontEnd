import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {EmailJsService} from "../../services/emailjs.service";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../../shared/services/auth.service";
import {TokenStorageService} from "../../../shared/services/tokenStorage.service";

@Component({
  selector: 'app-invite-employee-dialog',
  templateUrl: './invite-employee-dialog.component.html',
  styleUrls: ['./invite-employee-dialog.component.css'],
  providers: [EmailJsService]
})
export class InviteEmployeeDialogComponent {
  form: FormGroup;
  isInviteButtonDisabled = true;
  signUpForm: any = {};
  roles = ["ROLE_USER"];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private dialogRef: MatDialogRef<InviteEmployeeDialogComponent>,
              private fb: FormBuilder,
              private emailJsService: EmailJsService,
              private userService: UserService,
              private authService: AuthService,
              private tokenStorage: TokenStorageService) {
    this.form = this.fb.group({
      newEmployeeFirstName: ['', Validators.required],
      newEmployeeLastName: ['', Validators.required],
      newEmployeeEmail: ['', [Validators.required, Validators.email]],
      newEmployeePassword: ['', Validators.required]
    });

    this.form.valueChanges.subscribe(() => {
      this.isInviteButtonDisabled = !this.form.valid;
    });
  }

  cancelInvitation(): void {
    this.dialogRef.close();
  }

  async sendInvitation() {
    this.dialogRef.close();
    try {
      await this.emailJsService.sendInvitation({
        newEmployeeFirstName: this.form.value.newEmployeeFirstName,
        newEmployeeLastName: this.form.value.newEmployeeLastName,
        newEmployeeEmail: this.form.value.newEmployeeEmail,
        newEmployeePassword: this.form.value.newEmployeePassword,
      });
      alert('Email sent successfully!');

      const newEmployee = {
        company_id: 1,
        first_name: this.form.value.newEmployeeFirstName,
        last_name: this.form.value.newEmployeeLastName,
        email: this.form.value.newEmployeeEmail,
        password: this.form.value.newEmployeePassword,
      };

      this.signUpForm = {username: this.form.value.newEmployeeEmail, password: this.form.value.newEmployeePassword, roles: this.roles}
      this.authService.register(this.signUpForm).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );

      const newEmployeeForm = {firstName: this.form.value.newEmployeeFirstName, lastName: this.form.value.newEmployeeLastName, email: this.form.value.newEmployeeEmail, companyId: this.tokenStorage.getCompanyId()};

      this.userService.setBasePath();
      this.userService.create(newEmployeeForm).subscribe((response: any) => {
        console.log('Response', response);
      });
    } catch (e) {
      alert('Error, could not send email.');
      console.log(e);
    }
    this.form.reset();
  }

}
