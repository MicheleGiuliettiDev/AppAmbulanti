/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutorizzazioneService } from './Autorizzazione.service';

describe('Service: Autorizzazione', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorizzazioneService]
    });
  });

  it('should ...', inject([AutorizzazioneService], (service: AutorizzazioneService) => {
    expect(service).toBeTruthy();
  }));
});
