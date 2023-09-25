import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-process-input-dialog-preparation-area',
  templateUrl: './process-input-dialog-preparation-area.component.html',
  styleUrls: ['./process-input-dialog-preparation-area.component.css']
})
export class ProcessInputDialogPreparationAreaComponent {
  author: string = '';
  day: number = 0;
  date: string = '';
  time: string = '';
  activities: string = '';
  temperature: number = 0;
  comment: string = '';
  constructor(public dialogRef: MatDialogRef<ProcessInputDialogPreparationAreaComponent>) {
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
