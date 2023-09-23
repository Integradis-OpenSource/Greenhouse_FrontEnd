import { Component  } from '@angular/core';
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-stepper-content',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.css'],
})
export class StepperContentComponent {
  phases = [
    { label: '0', message: 'Stock' },
    { label: '1', message: 'Preparation area' },
    { label: '2', message: 'Bunker' },
    { label: '3', message: 'Tunnel' },
    { label: '4.1', message: 'Incubation' },
    { label: '4.2', message: 'Casing' },
    { label: '4.3', message: 'Induction' },
    { label: '4.4', message: 'Harvest' },
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
  constructor(private communicationService: CommunicationService) {
  }

  //Funcion aun no usada correctamente, al usarla debe de aparecer el popup
  activeObject() {
    this.communicationService.triggerShowPopupButtonClick();
  }

}
