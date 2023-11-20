import {Component, Input} from '@angular/core';
import {EventServiceService} from "../../services/event.service";
import { Router } from '@angular/router';
import {CommunicationService} from "../../services/communication.service";
import {CropsService} from "../../services/crops.service";

@Component({
  selector: 'app-popup-warning',
  templateUrl: './popup-warning.component.html',
  styleUrls: ['./popup-warning.component.css']
})
export class PopupWarningComponent {
  @Input() popupText = 'This phase is completed, you will not be able to make any more records at this stage. Are you sure you want to continue?';
  @Input() cropId: number;
  @Input() phase: string;
  popupVisible = false;
  isButtonDisabled = false;

  constructor(private interactionService: EventServiceService,
              private router: Router,private communicationService: CommunicationService,
              private cropService: CropsService) {
    this.cropId = 0;
    this.phase = "";
    this.communicationService.showPopupButtonClick$.subscribe(() => {
      this.activeObject();
    });
  }


  activeObject() {
    this.toggle();
    this.interactionService.activateObject();
    this.popupVisible = true;
  }

  closePopupEnd() {
    this.popupVisible = false;
    this.cropService.setResourceEndpoint('end_phase')
    this.cropService.patch(this.cropId).subscribe((response: any) => {
      console.log('Response',response)
    });
    this.cropService.setResourceEndpoint('')
    this.cropService.getById(this.cropId).subscribe((response: any) => {
      console.log('Response',response)
      const phase = this.formatCropPhase(response.cropPhase);
      this.router.navigate([`/harvest/${this.cropId}/${phase}`]);
    });
    //this.router.navigate([`/harvest/${this.cropId}/${this.phase}`]);
  }

  formatCropPhase(phase: string) {
    switch (phase) {
      case 'FORMULA':
        return 'Formula';
      case 'PREPARATION_AREA':
        return 'Preparation area';
      case 'BUNKER':
        return 'Bunker';
      case 'TUNNEL':
        return 'Tunnel';
      case 'INCUBATION':
        return 'Incubation';
      case 'CASING':
        return 'Casing';
      case 'INDUCTION':
        return 'Induction';
      case 'HARVEST':
        return 'Harvest';
      default:
        return '';
    }
  }

  closePopup() {
    this.popupVisible = false;
  }

  toggle() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}

