import {Component, OnInit, ViewChild} from '@angular/core';
import {Team} from '../../../classes/team.class';
import {NgForm} from '@angular/forms';
import {TeamService} from '../../../services/team.service';
import { Player } from 'src/app/classes/player.class';
import {PlayerService} from '../../../services/player.service';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  protected team: Team;
  protected player: Player;
  
  teams =[];
  

  
  constructor(private playerService: PlayerService,  private teamService: TeamService, private auth:AuthService) {
  }
  ngOnInit() {
    this.team = new Team();
    this.player = new Player();
    this.getTeam();
    //this.getPlayer();
  }

  protected addTeam() {
    if (true) {
      this.teamService.addTeam(this.team)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }
  //this.form.valid
  protected addPlayer() {
    if (true) {
      console.log('222222222222',this.player);
      this.playerService.addPlayer(this.player)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }
  
  protected getTeam() {
    if (true) {
      this.teamService.getTeam()
        .subscribe((res: any) => this.handleTeam(res));
    }
  }

  handleTeam(res:any) {
    if (res){
       res.forEach(element => {
         let teamm={value:'',id:0};
         teamm.value=element.teamName;
         teamm.id=element.id;
         this.teams.push(teamm);
      });
       }
  }
}
