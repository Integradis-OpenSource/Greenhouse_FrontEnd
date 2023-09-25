
import {Component, Input} from '@angular/core';
import {EventServiceService} from "../../../harvestings/services/event.service";
import { Router } from '@angular/router';
import {CommunicationService} from "../../../harvestings/services/communication.service";
@Component({
  selector: 'app-popup-new-crop',
  templateUrl: './popup-new-crop.component.html',
  styleUrls: ['./popup-new-crop.component.css']
})
export class PopupNewCropComponent {
  @Input() popupText = 'Do you want to start a new harvest? It will be recorded as start date ';
  date= Date.now()

  popupVisible = false;
  isButtonDisabled = false;

  constructor(private interactionService: EventServiceService, private router: Router,private communicationService: CommunicationService) {

  }

  activeObjectPopUpNewCrop() {
    this.interactionService.activeObjectPopUpNewCrop();
    this.popupVisible = true;
    this.isButtonDisabled = true;
  }
  closePopUpNewCrop() {
    this.popupVisible = false;
  }

  protected readonly close = close;
}
