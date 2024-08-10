import { TestBed } from '@angular/core/testing';

import { FilterSaveService } from './filter-save.service';

describe('FilterSaveService', () => {
  let service: FilterSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
