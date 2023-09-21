import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationContentComponent } from './organization-content.component';

describe('OrganizationContentComponent', () => {
  let component: OrganizationContentComponent;
  let fixture: ComponentFixture<OrganizationContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationContentComponent]
    });
    fixture = TestBed.createComponent(OrganizationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
