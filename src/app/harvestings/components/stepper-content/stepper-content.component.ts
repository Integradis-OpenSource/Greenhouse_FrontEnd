import { Component  } from '@angular/core';

@Component({
  selector: 'app-stepper-content',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.css'],
})
export class StepperContentComponent {
  phases = [
    { label: '0', message: 'Stock', endpoint: 'stock' },
    { label: '1', message: 'Preparation area', endpoint: 'preparation_area' },
    { label: '2', message: 'Bunker', endpoint: 'bunker' },
    { label: '3', message: 'Tunnel', endpoint: 'tunnel' },
    { label: '4.1', message: 'Incubation', endpoint: 'grow_room_record?processType=Incubation' },
    { label: '4.2', message: 'Casing', endpoint: 'grow_room_record?processType=Casing' },
    { label: '4.3', message: 'Induction', endpoint: 'grow_room_record?processType=Induction' },
    { label: '4.4', message: 'Harvest', endpoint: 'grow_room_record?processType=Harvest' },
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
}
