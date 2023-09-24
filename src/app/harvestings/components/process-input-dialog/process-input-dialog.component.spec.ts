import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInputDialogComponent } from './process-input-dialog.component';

describe('ProcessInputDialogComponent', () => {
  let component: ProcessInputDialogComponent;
  let fixture: ComponentFixture<ProcessInputDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessInputDialogComponent]
    });
    fixture = TestBed.createComponent(ProcessInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
