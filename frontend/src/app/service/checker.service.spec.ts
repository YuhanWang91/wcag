/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckerService } from './checker.service';

describe('CheckerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckerService]
    });
  });

  it('should ...', inject([CheckerService], (service: CheckerService) => {
    expect(service).toBeTruthy();
  }));
});
