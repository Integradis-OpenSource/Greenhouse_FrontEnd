import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInputDialogBunkerComponent } from './process-input-dialog-bunker.component';

describe('ProcessInputDialogBunkerComponent', () => {
  let component: ProcessInputDialogBunkerComponent;
  let fixture: ComponentFixture<ProcessInputDialogBunkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessInputDialogBunkerComponent]
    });
    fixture = TestBed.createComponent(ProcessInputDialogBunkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
