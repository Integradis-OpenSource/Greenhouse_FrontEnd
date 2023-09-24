import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInputDialogPreparationAreaComponent } from './process-input-dialog-preparation-area.component';

describe('ProcessInputDialogPreparationAreaComponent', () => {
  let component: ProcessInputDialogPreparationAreaComponent;
  let fixture: ComponentFixture<ProcessInputDialogPreparationAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessInputDialogPreparationAreaComponent]
    });
    fixture = TestBed.createComponent(ProcessInputDialogPreparationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
