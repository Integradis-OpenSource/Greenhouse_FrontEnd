import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

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
  constructor(public dialogRef: MatDialogRef<ProcessInputDialogTunnelComponent>) {
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
