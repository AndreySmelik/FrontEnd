import { Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Tournament } from 'src/app/classes/tournament.class';
import { TournamentService } from 'src/app/services/tournament.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  
  protected tournament: Tournament;

  constructor(private tournamentService: TournamentService,private auth:AuthService) { }

  ngOnInit() {
    this.tournament = new Tournament();
  }

  protected addTournament() {
    if (this.form.valid) {
      this.tournamentService.addTournament(this.tournament)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }
}
