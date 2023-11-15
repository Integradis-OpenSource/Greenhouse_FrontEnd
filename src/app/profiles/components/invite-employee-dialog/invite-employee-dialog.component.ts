import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {EmailJsService} from "../../services/emailjs.service";

@Component({
  selector: 'app-invite-employee-dialog',
  templateUrl: './invite-employee-dialog.component.html',
  styleUrls: ['./invite-employee-dialog.component.css'],
  providers: [EmailJsService]
})
export class InviteEmployeeDialogComponent {
  form: FormGroup;
  isInviteButtonDisabled = true;

  constructor(private dialogRef: MatDialogRef<InviteEmployeeDialogComponent>, private fb: FormBuilder, private emailJsService: EmailJsService) {
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
    } catch (e) {
      alert('Error, could not send email.');
      console.log(e);
    }
    this.form.reset();
  }
}
