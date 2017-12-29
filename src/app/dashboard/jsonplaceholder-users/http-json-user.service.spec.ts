import { TestBed, inject } from '@angular/core/testing';

import { HttpJsonUserService } from './http-json-user.service';

describe('HttpJsonUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpJsonUserService]
    });
  });

  it('should be created', inject([HttpJsonUserService], (service: HttpJsonUserService) => {
    expect(service).toBeTruthy();
  }));
});
