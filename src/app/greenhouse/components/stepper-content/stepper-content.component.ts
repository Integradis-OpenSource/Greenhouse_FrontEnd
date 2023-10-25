import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CropsService} from "../../services/crops.service";

@Component({
  selector: 'app-stepper-content',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.css'],
})
export class StepperContentComponent implements OnInit{
  activeStep: number = 0;
  nextStep: any;
  cropId: number = 0;
  phase: string = '';
  date: string = '';
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
  constructor(private route: ActivatedRoute, private cropService: CropsService) {
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
    this.cropService.setResourceEndpoint(this.cropId.toString());
    this.cropService.getList().subscribe((response: any) => {
      this.date = response.start_date;
      console.log(response);
    });
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

    if (data.hasOwnProperty(this.phase)) {
      this.activeStep = data[this.phase];
      this.setNextStep();
    } else {
      console.error(`Unknown phase: ${this.phase}`);
    }
  }

  setNextStep(): void {
    this.nextStep = this.activeStep + 1;
    const data: { [key: number]: string } = {
      0: 'Stock',
      1: 'Preparation area',
      2: 'Bunker',
      3: 'Tunnel',
      4: 'Incubation',
      5: 'Casing',
      6: 'Induction',
      7: 'Harvest',
    }
    if (data.hasOwnProperty(this.nextStep)) {
      this.nextStep = data[this.nextStep];
    } else {
      console.error(`Unknown phase: ${this.phase}`);
    }
  }
}

