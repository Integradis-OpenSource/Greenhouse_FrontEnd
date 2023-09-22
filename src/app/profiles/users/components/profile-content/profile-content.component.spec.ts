import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContentComponent } from './profile-content.component';

describe('MainContentComponent', () => {
  let component: ProfileContentComponent;
  let fixture: ComponentFixture<ProfileContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileContentComponent]
    });
    fixture = TestBed.createComponent(ProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
