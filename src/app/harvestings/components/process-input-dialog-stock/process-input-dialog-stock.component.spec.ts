import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInputDialogStockComponent } from './process-input-dialog-stock.component';

describe('ProcessInputDialogStockComponent', () => {
  let component: ProcessInputDialogStockComponent;
  let fixture: ComponentFixture<ProcessInputDialogStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessInputDialogStockComponent]
    });
    fixture = TestBed.createComponent(ProcessInputDialogStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
