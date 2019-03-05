import { TestBed } from '@angular/core/testing';

import { ListTournamentService } from './listtournament.service';

describe('ListtournamentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListTournamentService = TestBed.get(ListTournamentService);
    expect(service).toBeTruthy();
  });
});
