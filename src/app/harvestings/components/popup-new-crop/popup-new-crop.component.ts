
import {Component, Input} from '@angular/core';
import {EventServiceService} from "../../services/event.service";
import { Router } from '@angular/router';
import {CommunicationService} from "../../services/communication.service";
@Component({
  selector: 'app-popup-new-crop',
  templateUrl: './popup-new-crop.component.html',
  styleUrls: ['./popup-new-crop.component.css']
})
export class PopupNewCropComponent {
  @Input() popupText = 'Do you want to start a new crop? It will be recorded as start date ';
  @Input() date= "18/09/23"

  popupVisible = false;

  constructor(private interactionService: EventServiceService, private router: Router,private communicationService: CommunicationService) {

  }

  activeObjectPopUpNewCrop() {
    this.interactionService.activeObjectPopUpNewCrop();
    this.popupVisible = true;
  }
  closePopUpNewCrop() {
    this.popupVisible = false;
  }
}
