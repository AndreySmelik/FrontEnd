import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListTournament } from 'src/app/classes/listtournament.class';
import { ListTournamentService } from 'src/app/services/listtournament.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  protected listTournament : ListTournament;

  constructor(private tournamentService: ListTournamentService,private auth:AuthService) { }

  ngOnInit() {
   this.listTournament = new ListTournament();
  }
 protected addListTournament() {
    if (this.form.valid) {
     console.log('33333333333333',this.listTournament);
      this.tournamentService.addListTournament(this.listTournament)
        .subscribe((res: any) => {
          console.log('call res565745647567', res);
        });
    }
  }
}
