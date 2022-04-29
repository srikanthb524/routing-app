import { TestBed } from '@angular/core/testing';

import { GetCocktaildataService } from './get-cocktaildata.service';

describe('GetCocktaildataService', () => {
  let service: GetCocktaildataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCocktaildataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
