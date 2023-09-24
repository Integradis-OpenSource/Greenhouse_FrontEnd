import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-process-input-dialog',
  templateUrl: './process-input-dialog.component.html',
  styleUrls: ['./process-input-dialog.component.css']
})
export class ProcessInputDialogComponent {
  userName: string = '';

  constructor(public dialogRef: MatDialogRef<ProcessInputDialogComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
