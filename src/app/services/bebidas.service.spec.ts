import { TestBed } from '@angular/core/testing';

import { BebidasService } from './bebidas.service';

describe('BebidasService', () => {
  let servicio: BebidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    servicio = TestBed.inject(BebidasService);
  });

  it('should be created', () => {
    expect(servicio).toBeTruthy();
  });
});
