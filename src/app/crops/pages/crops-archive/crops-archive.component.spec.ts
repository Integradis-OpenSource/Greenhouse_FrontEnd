import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsArchiveComponent } from './crops-archive.component';

describe('CropsArchiveComponent', () => {
  let component: CropsArchiveComponent;
  let fixture: ComponentFixture<CropsArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropsArchiveComponent]
    });
    fixture = TestBed.createComponent(CropsArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
