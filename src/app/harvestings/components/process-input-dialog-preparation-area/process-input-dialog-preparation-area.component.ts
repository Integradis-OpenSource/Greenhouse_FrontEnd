import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ProcessEntriesService} from "../../services/process-entries.service";

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
  constructor(
    private stockService: ProcessEntriesService,
    public dialogRef: MatDialogRef<ProcessInputDialogPreparationAreaComponent>
  ) {
    this.stockService.setResourceEndpoint('preparation_area');
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
      activities: this.activities,
      temperature: this.temperature,
      comment: this.comment,
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
