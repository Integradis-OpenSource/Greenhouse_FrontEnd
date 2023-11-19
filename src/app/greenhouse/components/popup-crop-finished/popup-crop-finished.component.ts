import { Component,Input } from '@angular/core';
import {EventServiceService} from "../../services/event.service";
import {CropsService} from "../../services/crops.service";

@Component({
  selector: 'app-popup-crop-finished',
  templateUrl: './popup-crop-finished.component.html',
  styleUrls: ['./popup-crop-finished.component.css']
})
export class PopupCropFinishedComponent {
  date_start= Date.now()
  popupVisible = false;
  notificationVisible = false;
  @Input() cropId: number;


  constructor(private interactionService: EventServiceService, private cropService: CropsService) {
    this.cropId = 0;
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
    this.cropService.patch(this.cropId, {state: "finished"}).subscribe((response: any) => {
      console.log('Response',response)
    });
  }
}

