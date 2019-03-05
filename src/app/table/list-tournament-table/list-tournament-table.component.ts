import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListTournamentTableDataSource } from './list-tournament-table-datasource';
import { ListTournamentService } from 'src/app/services/listtournament.service';

@Component({
  selector: 'app-list-tournament-table',
  templateUrl: './list-tournament-table.component.html',
  styleUrls: ['./list-tournament-table.component.scss'],
})
export class ListTournamentTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ListTournamentTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'tournamentName' , 'maxNumberTeam' ,'prize', 'date'];
  
constructor(public listTournamentService:ListTournamentService){}

  ngOnInit() {
    this.dataSource = new ListTournamentTableDataSource(this.paginator, this.sort, this.listTournamentService);
  }
}
