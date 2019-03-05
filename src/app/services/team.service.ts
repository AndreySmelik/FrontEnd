import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Team} from '../classes/team.class';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private restService: RestService) {
  }

  public addTeam(team: Team) {
    const params = {
      team: team
    };
    return this.restService.doCallPost('createTeam', params);
  }
  public getTeam() {
    return this.restService.doCallGet('getTeam');
  }
}
