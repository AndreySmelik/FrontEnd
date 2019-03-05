import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TournamentTableDataSource } from './tournament-table-datasource';
import { TournamentService } from 'src/app/services/tournament.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-tournament-table',
  templateUrl: './tournament-table.component.html',
  styleUrls: ['./tournament-table.component.scss'],
})
export class TournamentTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TournamentTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'teamName','win','defeats'];

  constructor(private tournamentService: TournamentService,private teamService:TeamService){}

  ngOnInit() {
    this.dataSource = new TournamentTableDataSource(this.paginator, this.sort,this.tournamentService,this.teamService);
  }
  addTournament(){
    this.dataSource = new TournamentTableDataSource(this.paginator, this.sort,this.tournamentService,this.teamService);

  }
}
