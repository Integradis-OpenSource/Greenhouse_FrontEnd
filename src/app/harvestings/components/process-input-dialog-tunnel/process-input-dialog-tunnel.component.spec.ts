import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInputDialogTunnelComponent } from './process-input-dialog-tunnel.component';

describe('ProcessInputDialogTunnelComponent', () => {
  let component: ProcessInputDialogTunnelComponent;
  let fixture: ComponentFixture<ProcessInputDialogTunnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessInputDialogTunnelComponent]
    });
    fixture = TestBed.createComponent(ProcessInputDialogTunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
