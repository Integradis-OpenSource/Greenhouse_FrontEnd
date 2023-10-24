import {Component, Input} from '@angular/core';
import {EventServiceService} from "../../services/event.service";
import { Router } from '@angular/router';
import {CommunicationService} from "../../services/communication.service";

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

  constructor(private interactionService: EventServiceService, private router: Router,private communicationService: CommunicationService) {
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
    this.router.navigate([`/harvest/${this.cropId}/${this.phase}`]);
  }

  closePopup() {
    this.popupVisible = false;
  }

  toggle() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}

