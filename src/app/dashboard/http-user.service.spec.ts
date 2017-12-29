import { TestBed, inject } from '@angular/core/testing';

import { HttpUserService } from './http-user.service';

describe('HttpUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpUserService]
    });
  });

  it('should be created', inject([HttpUserService], (service: HttpUserService) => {
    expect(service).toBeTruthy();
  }));
});
