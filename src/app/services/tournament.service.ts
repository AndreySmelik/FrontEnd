import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Tournament } from '../classes/tournament.class';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  
  tournamentName:number;

  constructor(private restService: RestService) { }

  public addTournament(tournament: Tournament) {
    const params = {
      tournament: tournament
    };
    return this.restService.doCallPost('createTournament', params);
  }
  public getTournament() {
    return this.restService.doCallGet('getTournament');
  }
}
