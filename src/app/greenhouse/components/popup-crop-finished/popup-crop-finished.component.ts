import { Component,Input } from '@angular/core';
import {EventServiceService} from "../../services/event.service";
import { Router } from '@angular/router';
import {CommunicationService} from "../../services/communication.service";
@Component({
  selector: 'app-popup-crop-finished',
  templateUrl: './popup-crop-finished.component.html',
  styleUrls: ['./popup-crop-finished.component.css']
})
export class PopupCropFinishedComponent {
  @Input() popupText = 'The cultivation started on '
  date_start= Date.now()
  @Input() popupText2= `has successfully completed all stages, the records were filed in the section `;
  @Input() popupText3= '"Control Panel", Crop History"'
  popupVisible = false;
  notificationVisible = false;


  constructor(private interactionService: EventServiceService) {

  }

  activeObjectPopUpCropFinished() {
    this.interactionService.activeObjectPopUpCropFinished();
    this.popupVisible = true;
  }

  activeObjectNotificationFinished() {
    this.interactionService.activeObjectPopUpCropFinished();
    this.popupVisible = false;
    this.notificationVisible = true;
  }
  closePopUpCropFinished() {
    this.popupVisible = false;
  }
}

