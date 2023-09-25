import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCropFinishedComponent } from './popup-crop-finished.component';

describe('PopupCropFinishedComponent', () => {
  let component: PopupCropFinishedComponent;
  let fixture: ComponentFixture<PopupCropFinishedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupCropFinishedComponent]
    });
    fixture = TestBed.createComponent(PopupCropFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
