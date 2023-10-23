
import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../services/communication.service";
import { MatDialog } from '@angular/material/dialog';
import { ProcessInputDialogComponent } from '../../../harvestings/components/process-input-dialog/process-input-dialog.component';
import {ProcessInputDialogStockComponent} from "../../../harvestings/components/process-input-dialog-stock/process-input-dialog-stock.component";
import {ProcessInputDialogBunkerComponent} from "../../../harvestings/components/process-input-dialog-bunker/process-input-dialog-bunker.component";
import {ProcessInputDialogPreparationAreaComponent} from "../../../harvestings/components/process-input-dialog-preparation-area/process-input-dialog-preparation-area.component";
import {ProcessInputDialogTunnelComponent} from "../../../harvestings/components/process-input-dialog-tunnel/process-input-dialog-tunnel.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stepper-content',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.css'],
})
export class StepperContentComponent implements OnInit{
  activeStep: number = 0;
  cropId: number = 0;
  phase: string = '';
  phases = [
    { label: '0', message: 'Stock', endpoint: '' },
    { label: '1', message: 'Preparation area', endpoint: '' },
    { label: '2', message: 'Bunker', endpoint: '' },
    { label: '3', message: 'Tunnel', endpoint: '' },
    { label: '4.1', message: 'Incubation', endpoint: '' },
    { label: '4.2', message: 'Casing', endpoint: '' },
    { label: '4.3', message: 'Induction', endpoint: '' },
    { label: '4.4', message: 'Harvest', endpoint: '' },
  ];
  calculateStepperLabel(index: number): string {
    if (index === 0) {
      return '0';
    } else if (index < 4) {
      return index.toString();
    } else {
      return '4.' + (index - 3).toString();
    }
  }
  constructor(private communicationService: CommunicationService, private dialog: MatDialog, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.phase = params['phase'];
      this.cropId = params['id'];
      console.log(this.cropId);
      this.setCurrentStep();
      this.phases[0].endpoint = `stock?crop_id=${this.cropId}`;
      this.phases[1].endpoint = `preparation_area?crop_id=${this.cropId}`;
      this.phases[2].endpoint = `bunker?crop_id=${this.cropId}`;
      this.phases[3].endpoint = `tunnel?crop_id=${this.cropId}`;
      this.phases[4].endpoint = `grow_room_record?processType=Incubation&crop_id=${this.cropId}`;
      this.phases[5].endpoint = `grow_room_record?processType=Casing&&crop_id=${this.cropId}`;
      this.phases[6].endpoint = `grow_room_record?processType=Induction&&crop_id=${this.cropId}`;
      this.phases[7].endpoint = `grow_room_record?processType=Harvest&&crop_id=${this.cropId}`;
    });
  }
  activeObject() {
    this.communicationService.triggerShowPopupButtonClick();
  }

  setCurrentStep(): void {
    const data: { [key: string]: number } = {
      'Stock': 0,
      'Preparation area': 1,
      'Bunker': 2,
      'Tunnel': 3,
      'Incubation': 4,
      'Casing': 5,
      'Induction': 6,
      'Harvest': 7,
    }

    // Check if this.phase exists as a property in the data object
    if (data.hasOwnProperty(this.phase)) {
      this.activeStep = data[this.phase];
    } else {
      // Handle the case where this.phase doesn't match any property
      console.error(`Unknown phase: ${this.phase}`);
      // You might want to set a default value for this.activeStep here
    }
  }

  record: string = '';

  openInputDialog(index: number): void {
    if (index === 0){
      const dialogRef = this.dialog.open(ProcessInputDialogStockComponent, {
        width: '700px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('Recorded information:', result);
        if (result) {
          this.record = result;
        }
      });
    }else if(index === 1){
      const dialogRef = this.dialog.open(ProcessInputDialogPreparationAreaComponent, {
        width: '700px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('Recorded information:', result);
        if (result) {
          this.record = result;
        }
      });
    }else if(index === 2){
      const dialogRef = this.dialog.open(ProcessInputDialogBunkerComponent, {
        width: '700px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('Recorded information:', result);
        if (result) {
          this.record = result;
        }
      });
    }else if(index === 3){
      const dialogRef = this.dialog.open(ProcessInputDialogTunnelComponent, {
        width: '700px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('Recorded information:', result);
        if (result) {
          this.record = result;
        }
      });
    }else{
      const dialogRef = this.dialog.open(ProcessInputDialogComponent, {
        width: '700px',
        data: {processType: this.phases[index].endpoint}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('Recorded information:', result);
        if (result) {
          this.record = result;
        }
      });
    }
  }
}

