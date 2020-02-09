import { TestBed } from '@angular/core/testing';

import { ApiProfessoresService } from './api-professores.service';

describe('ApiProfessoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiProfessoresService = TestBed.get(ApiProfessoresService);
    expect(service).toBeTruthy();
  });
});
