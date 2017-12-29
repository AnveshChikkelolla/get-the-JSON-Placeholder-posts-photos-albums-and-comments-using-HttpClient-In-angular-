import { TestBed, inject } from '@angular/core/testing';

import { HttpurlserviceService } from './httpurlservice.service';

describe('HttpurlserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpurlserviceService]
    });
  });

  it('should be created', inject([HttpurlserviceService], (service: HttpurlserviceService) => {
    expect(service).toBeTruthy();
  }));
});
