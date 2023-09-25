import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-process-input-dialog',
  templateUrl: './process-input-dialog.component.html',
  styleUrls: ['./process-input-dialog.component.css']
})
export class ProcessInputDialogComponent {
  author: string = '';
  day: number = 0;
  date: string = '';
  time: string = '';
  growRoom: number = 0;
  airTemperature: number = 0;
  compostTemperature: string = '';
  co2: number = 0;
  h2: number = 0;
  setting: number = 0;
  comment: string = '';
  constructor(public dialogRef: MatDialogRef<ProcessInputDialogComponent>) {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
