import { TestBed } from '@angular/core/testing';

import { ProcessEntriesService } from './process-entries.service';

describe('ProcessEntriesService', () => {
  let service: ProcessEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
