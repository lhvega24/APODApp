import { TestBed } from '@angular/core/testing';

import { HttpNasaService } from './http-nasa.service';

describe('HttpNasaService', () => {
  let service: HttpNasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpNasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
