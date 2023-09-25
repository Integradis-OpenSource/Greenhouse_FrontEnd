import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesContentComponent } from './employees-content.component';

describe('EmployeesContentComponent', () => {
  let component: EmployeesContentComponent;
  let fixture: ComponentFixture<EmployeesContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesContentComponent]
    });
    fixture = TestBed.createComponent(EmployeesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
