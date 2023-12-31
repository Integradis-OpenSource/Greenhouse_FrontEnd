
import {Component, Input} from '@angular/core';
import {EventServiceService} from "../../services/event.service";
import {CropsService} from "../../services/crops.service";
import {TokenStorageService} from "../../../shared/services/tokenStorage.service";
@Component({
  selector: 'app-popup-new-crop',
  templateUrl: './popup-new-crop.component.html',
  styleUrls: ['./popup-new-crop.component.css']
})
export class PopupNewCropComponent {
  @Input() popupText = 'Do you want to start a new crop? It will be recorded as start date ';
  date= Date.now()
  id = 0;
  currentDateTime = new Date();
  currentDate = this.currentDateTime.toISOString().split('T')[0];
  companyId = this.tokenStorageService.getCompanyId();

  popupVisible = false;
  isButtonDisabled = false;

  constructor(private interactionService: EventServiceService, private cropService: CropsService, private tokenStorageService: TokenStorageService) {

  }

  activeObjectPopUpNewCrop() {
    this.cropService.getList().subscribe((response: any) => {
      if (response.length === 0)
        this.id = 1;
      else
        this.id = response.length + 1;
    });
    this.interactionService.activeObjectPopUpNewCrop();
    this.popupVisible = true;
    this.isButtonDisabled = true;
  }

  startPopUpNewCrop() {
   /* this.cropService.create({organization_id: 1, start_date: this.currentDate, end_date: '', phase: 'Stock', state: 'active'}).subscribe((response: any) => {
      console.log('Response',response)
    });*/
    this.cropService.setBasePath('https://greenhouse.zeabur.app/api/v1/crops')
    //this.cropService.setBasePath('http://localhost:8080/api/v1/crops')
    this.cropService.setResourceEndpoint('')
    console.log("Endpoint", this.cropService.getEndpoint())
    this.cropService.create({companyId: this.companyId}).subscribe((response: any) => {
      console.log('Response',response)
    });
    this.popupVisible = false;
  }
  closePopUpNewCrop() {
    this.popupVisible = false;
  }

  protected readonly close = close;
}
