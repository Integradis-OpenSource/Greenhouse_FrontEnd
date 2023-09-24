import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWarningComponent } from './popup-warning.component';

describe('PopupWarningComponent', () => {
  let component: PopupWarningComponent;
  let fixture: ComponentFixture<PopupWarningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupWarningComponent]
    });
    fixture = TestBed.createComponent(PopupWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
