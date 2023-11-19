import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteEmployeeDialogComponent } from './invite-employee-dialog.component';

describe('InviteEmployeeFormComponent', () => {
  let component: InviteEmployeeDialogComponent;
  let fixture: ComponentFixture<InviteEmployeeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteEmployeeDialogComponent]
    });
    fixture = TestBed.createComponent(InviteEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
