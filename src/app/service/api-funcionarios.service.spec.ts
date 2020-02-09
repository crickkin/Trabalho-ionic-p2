import { TestBed } from '@angular/core/testing';

import { ApiFuncionariosService } from './api-funcionarios.service';

describe('ApiFuncionariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFuncionariosService = TestBed.get(ApiFuncionariosService);
    expect(service).toBeTruthy();
  });
});
