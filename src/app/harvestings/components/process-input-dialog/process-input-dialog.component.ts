import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProcessEntriesService} from "../../services/process-entries.service";

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

  @Input() processType :string;
  constructor(
    private tunnelService: ProcessEntriesService,
    public dialogRef: MatDialogRef<ProcessInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { processType: string }
  ) {
    this.processType = data.processType;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.tunnelService.setResourceEndpoint(this.processType);
    const processTypeValue = this.processType.split('=').pop();
    console.log(this.processType);
    const formData = {
      author: this.author,
      day: this.day,
      date: this.date,
      time: this.time,
      growRoom: this.growRoom,
      airTemperature: this.airTemperature,
      compostTemperature: this.compostTemperature,
      co2: this.co2,
      h2: this.h2,
      setting: this.setting,
      comment: this.comment,
      processType: processTypeValue
    }
    this.tunnelService.create(formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
    this.dialogRef.close();
  }
}
