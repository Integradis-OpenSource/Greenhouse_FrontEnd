import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {ProcessEntriesService} from "../../services/process-entries.service";

@Component({
  selector: 'app-process-input-dialog-stock',
  templateUrl: './process-input-dialog-stock.component.html',
  styleUrls: ['./process-input-dialog-stock.component.css']
})
export class ProcessInputDialogStockComponent {
  author: string = '';
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

  constructor(
    private stockService: ProcessEntriesService,
    public dialogRef: MatDialogRef<ProcessInputDialogStockComponent>
  ) {
    this.stockService.setResourceEndpoint('stock');
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {
    const formData = {
      author: this.author,
      day: this.day,
      date: this.date,
      time: this.time,
      hay: this.hay,
      corn: this.corn,
      guano: this.guano,
      cottonSeedCake: this.cottonSeedCake,
      soybeanMeal: this.soybeanMeal,
      gypsum: this.gypsum,
      urea: this.urea,
      ammoniumSulphate: this.ammoniumSulphate,
    };

    this.stockService.create(formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );

    // Close the dialog
    this.dialogRef.close();
  }
}
