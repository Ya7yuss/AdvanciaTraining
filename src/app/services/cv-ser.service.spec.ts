import { TestBed } from '@angular/core/testing';

import { CvSerService } from './cv-ser.service';

describe('CvSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvSerService = TestBed.get(CvSerService);
    expect(service).toBeTruthy();
  });
});
