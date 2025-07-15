import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CalculatePercentagesService } from './calculate-percentages.service';

describe('CalculatePercentagesService', () => {
  let service: CalculatePercentagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CalculatePercentagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
