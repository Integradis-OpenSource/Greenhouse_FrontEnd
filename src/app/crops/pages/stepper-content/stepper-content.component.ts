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
    { label: '0', message: 'Formula', endpoint: '' , translate: 'FORMULA'},
    { label: '1', message: 'Preparation Area', endpoint: '' , translate: 'PREPARATION_AREA'},
    { label: '2', message: 'Bunker', endpoint: '' , translate: 'BUNKER'},
    { label: '3', message: 'Tunnel', endpoint: '' , translate: 'TUNNEL'},
    { label: '4.1', message: 'Incubation', endpoint: '' , translate: 'INCUBATION'},
    { label: '4.2', message: 'Casing', endpoint: '' , translate: 'CASING'},
    { label: '4.3', message: 'Induction', endpoint: '' , translate: 'INDUCTION'},
    { label: '4.4', message: 'Harvest', endpoint: '' , translate: 'HARVEST'},
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
      this.setCurrentStep();
      this.phases[0].endpoint = `${this.cropId}/formulas`;
      this.phases[1].endpoint = `${this.cropId}/preparation-areas`;
      this.phases[2].endpoint = `${this.cropId}/bunker`;
      this.phases[3].endpoint = `${this.cropId}/tunnels`;
      this.phases[4].endpoint = `${this.cropId}/grow-rooms/INCUBATION`;
      this.phases[5].endpoint = `${this.cropId}/grow-rooms/CASING`;
      this.phases[6].endpoint = `${this.cropId}/grow-rooms/INDUCTION`;
      this.phases[7].endpoint = `${this.cropId}/grow-rooms/HARVEST`;
    });
    //this.cropService.setResourceEndpoint(this.cropId.toString());
    this.cropService.setResourceEndpoint('')
    this.cropService.getById(this.cropId).subscribe((response: any) => {
      this.date = response.startDate.split('T')[0];
    });
  }

  setCurrentStep(): void {
    const data: { [key: string]: number } = {
      'Formula': 0,
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
      0: 'Formula',
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

