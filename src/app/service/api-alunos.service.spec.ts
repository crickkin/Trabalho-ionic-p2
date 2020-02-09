import { TestBed } from '@angular/core/testing';

import { ApiAlunosService } from './api-alunos.service';

describe('ApiAlunosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiAlunosService = TestBed.get(ApiAlunosService);
    expect(service).toBeTruthy();
  });
});
