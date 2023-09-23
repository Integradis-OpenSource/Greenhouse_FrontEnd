import {Component, Input} from '@angular/core';
import {EventServiceService} from "../../services/event.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-popup-warning',
  templateUrl: './popup-warning.component.html',
  styleUrls: ['./popup-warning.component.css']
})
export class PopupWarningComponent {
  @Input() popupText = 'This phase is completed, you will not be able to make any more records at this stage. Are you sure you want to continue?';
  popupVisible = false;

  constructor(private interactionService: EventServiceService, private router: Router) {

  }


  activeObject() {
    this.interactionService.activateObject();
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }
}

