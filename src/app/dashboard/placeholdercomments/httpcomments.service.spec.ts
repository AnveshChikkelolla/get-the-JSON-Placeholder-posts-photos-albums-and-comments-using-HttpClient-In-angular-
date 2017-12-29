import { TestBed, inject } from '@angular/core/testing';

import { HttpcommentsService } from './httpcomments.service';

describe('HttpcommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpcommentsService]
    });
  });

  it('should be created', inject([HttpcommentsService], (service: HttpcommentsService) => {
    expect(service).toBeTruthy();
  }));
});
