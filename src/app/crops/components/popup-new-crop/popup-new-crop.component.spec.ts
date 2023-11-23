import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewCropComponent } from './popup-new-crop.component';

describe('PopupNewCropComponent', () => {
  let component: PopupNewCropComponent;
  let fixture: ComponentFixture<PopupNewCropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupNewCropComponent]
    });
    fixture = TestBed.createComponent(PopupNewCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
