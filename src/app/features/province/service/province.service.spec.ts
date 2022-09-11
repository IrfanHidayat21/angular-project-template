import { TestBed } from '@angular/core/testing';

import { ProvinceService } from './province.service';
import { HttpClientModule } from '@angular/common/http'

describe('ProvinceService', () => {
  let service: ProvinceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProvinceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
