import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-process-input-dialog-bunker',
  templateUrl: './process-input-dialog-bunker.component.html',
  styleUrls: ['./process-input-dialog-bunker.component.css']
})
export class ProcessInputDialogBunkerComponent {
  author: string = '';
  day: number = 0;
  date: string = '';
  time: string = '';
  t1: number = 0;
  t2: number = 0;
  t3: number = 0;
  tp: number = 0;
  freq: number = 0;
  comment: string = '';
  constructor(public dialogRef: MatDialogRef<ProcessInputDialogBunkerComponent>) {
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
