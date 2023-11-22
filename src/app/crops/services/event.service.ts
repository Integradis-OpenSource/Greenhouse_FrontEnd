import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private addObjectSubject = new Subject<void>();

  activateObject() {
    this.addObjectSubject.next();
  }
  activeObjectPopUpNewCrop(){
    this.addObjectSubject.next();
  }
  activeObjectPopUpCropFinished(){
    this.addObjectSubject.next();
  }


}

