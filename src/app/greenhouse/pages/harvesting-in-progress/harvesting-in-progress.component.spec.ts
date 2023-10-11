import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestingInProgressComponent } from './harvesting-in-progress.component';

describe('ProcessLogComponent', () => {
  let component: HarvestingInProgressComponent;
  let fixture: ComponentFixture<HarvestingInProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarvestingInProgressComponent]
    });
    fixture = TestBed.createComponent(HarvestingInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
