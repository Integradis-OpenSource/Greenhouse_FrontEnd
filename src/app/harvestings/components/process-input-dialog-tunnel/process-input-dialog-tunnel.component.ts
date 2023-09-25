import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ProcessEntriesService} from "../../services/process-entries.service";

@Component({
  selector: 'app-process-input-dialog-tunnel',
  templateUrl: './process-input-dialog-tunnel.component.html',
  styleUrls: ['./process-input-dialog-tunnel.component.css']
})
export class ProcessInputDialogTunnelComponent {
  author: string = '';
  day: number = 0;
  date: string = '';
  time: string = '';
  t1: number = 0;
  t2: number = 0;
  t3: number = 0;
  tp: number = 0;
  growRoom: string = '';
  comment: string = '';
  constructor(
    private tunnelService: ProcessEntriesService,
    public dialogRef: MatDialogRef<ProcessInputDialogTunnelComponent>
  ) {
    this.tunnelService.setResourceEndpoint('bunker');
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
      growRoom: this.growRoom,
      comment: this.comment,
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
