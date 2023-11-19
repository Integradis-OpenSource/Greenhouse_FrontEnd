import { TestBed } from '@angular/core/testing';

import { EmailjsService } from './emailjs.service';

describe('EmailjsService', () => {
  let service: EmailjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
