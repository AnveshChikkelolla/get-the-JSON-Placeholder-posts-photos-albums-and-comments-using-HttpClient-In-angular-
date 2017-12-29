import { TestBed, inject } from '@angular/core/testing';

import { GithubIntercepterService } from './github-intercepter.service';

describe('GithubIntercepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubIntercepterService]
    });
  });

  it('should be created', inject([GithubIntercepterService], (service: GithubIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});
