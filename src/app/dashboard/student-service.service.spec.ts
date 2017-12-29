import { TestBed, inject } from '@angular/core/testing';

import { StudentServiceService } from './student-service.service';

describe('StudentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentServiceService]
    });
  });

  it('should be created', inject([StudentServiceService], (service: StudentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
