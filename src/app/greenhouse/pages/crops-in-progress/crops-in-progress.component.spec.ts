import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsInProgressComponent } from './crops-in-progress.component';

describe('ProcessLogComponent', () => {
  let component: CropsInProgressComponent;
  let fixture: ComponentFixture<CropsInProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropsInProgressComponent]
    });
    fixture = TestBed.createComponent(CropsInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
