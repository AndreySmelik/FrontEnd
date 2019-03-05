import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { ListTournament } from '../classes/listtournament.class';

@Injectable({
  providedIn: 'root'
})
export class ListTournamentService {


  constructor(private restService: RestService) { }

  public addListTournament(listTournament: ListTournament) {
    const params = {
      listTournament: listTournament
    };
    return this.restService.doCallPost('createListTournament', params);
  }
  public getListTournament() {
    return this.restService.doCallGet('getListTournament');
  }
}
