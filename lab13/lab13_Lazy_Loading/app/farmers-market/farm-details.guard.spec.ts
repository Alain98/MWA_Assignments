import { TestBed, async, inject } from '@angular/core/testing';

import { FarmDetailsGuard } from './farm-details.guard';

describe('FarmDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmDetailsGuard]
    });
  });

  it('should ...', inject([FarmDetailsGuard], (guard: FarmDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
