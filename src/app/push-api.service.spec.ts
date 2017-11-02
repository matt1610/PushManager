import { TestBed, inject } from '@angular/core/testing';

import { PushApiService } from './push-api.service';

describe('PushApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushApiService]
    });
  });

  it('should be created', inject([PushApiService], (service: PushApiService) => {
    expect(service).toBeTruthy();
  }));
});
