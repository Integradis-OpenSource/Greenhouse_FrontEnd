import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-process-input-dialog-stock',
  templateUrl: './process-input-dialog-stock.component.html',
  styleUrls: ['./process-input-dialog-stock.component.css']
})
export class ProcessInputDialogStockComponent {
  userName: string = '';
  day: number = 0;
  date: string = '';
  time: string = '';
  hay: number = 0;
  corn: number = 0;
  guano: number = 0;
  cottonSeedCake: number = 0;
  soybeanMeal: number = 0;
  gypsum: number = 0;
  urea: number = 0;
  ammoniumSulphate: number = 0;
  constructor(public dialogRef: MatDialogRef<ProcessInputDialogStockComponent>) {
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
