import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Player} from '../classes/player.class';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
    teamName:number;

  constructor(private restService: RestService) {
  }

  public addPlayer(player: Player) {
    const params = {
      player: player
    };
    return this.restService.doCallPost('createPlayer', params);
  }
  public getPlayer() {
    console.log('123');
    return this.restService.doCallGet('getPlayer');
  }
}
