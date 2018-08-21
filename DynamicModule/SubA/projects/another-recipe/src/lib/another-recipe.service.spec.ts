import { TestBed, inject } from '@angular/core/testing';

import { AnotherRecipeService } from './another-recipe.service';

describe('AnotherRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherRecipeService]
    });
  });

  it('should be created', inject([AnotherRecipeService], (service: AnotherRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
