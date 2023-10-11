import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ProcessEntriesService} from "../../../greenhouse/services/process-entries.service";

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
  constructor(
    private bunkerService: ProcessEntriesService,
    public dialogRef: MatDialogRef<ProcessInputDialogBunkerComponent>
  ) {
    this.bunkerService.setResourceEndpoint('bunker');
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
      t1: this.t1,
      t2: this.t2,
      t3: this.t3,
      tp: this.tp,
      freq: this.freq,
      comment: this.comment,
    }
    this.bunkerService.create(formData).subscribe(
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
