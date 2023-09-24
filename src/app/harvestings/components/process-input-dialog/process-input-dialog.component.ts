import {Component, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProcessTableComponent } from "../process-table/process-table.component";

@Component({
  selector: 'app-process-input-dialog',
  templateUrl: './process-input-dialog.component.html',
  styleUrls: ['./process-input-dialog.component.css']
})
export class ProcessInputDialogComponent {
  userName: string = '';
  day: number = 0;
  date: string = '';
  time: string = '';
  hay: number = 0;
  corn: number = 0;
  guano: number = 0;
  cotton_seed_cake: number = 0;
  soybean_meal: number = 0;
  gypsum: number = 0;
  urea: number = 0;
  Ammonium_Sulphate: number = 0;
  constructor(public dialogRef: MatDialogRef<ProcessInputDialogComponent>) {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
