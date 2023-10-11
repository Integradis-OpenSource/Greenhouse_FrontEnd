import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarContentComponent } from './toolbar-content.component';

describe('ToolbarContentComponent', () => {
  let component: ToolbarContentComponent;
  let fixture: ComponentFixture<ToolbarContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarContentComponent]
    });
    fixture = TestBed.createComponent(ToolbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
