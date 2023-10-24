import { TestBed } from '@angular/core/testing';

import { ProcessEntriesDashboardTableService } from './process-entries-dashboard-table.service';

describe('ProcessEntriesDashboardTableService', () => {
  let service: ProcessEntriesDashboardTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessEntriesDashboardTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
