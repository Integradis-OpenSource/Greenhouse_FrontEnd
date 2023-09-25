import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private showPopupButtonClickSource = new Subject<void>();
  showPopupButtonClick$ = this.showPopupButtonClickSource.asObservable();

  triggerShowPopupButtonClick() {
    this.showPopupButtonClickSource.next();
  }
}
