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
  @Input() date_start= "18/09/23 "
  @Input() popupText2= `has successfully completed all stages, the records were filed in the section `;
  @Input() popupText3= '"Control Panel", Crop History"'
  popupVisible = false;

  constructor(private interactionService: EventServiceService, private router: Router,private communicationService: CommunicationService) {

  }

  activeObjectPopUpCropFinished() {
    this.interactionService.activeObjectPopUpCropFinished();
    this.popupVisible = true;
  }
  closePopUpCropFinished() {
    this.popupVisible = false;
  }
}

