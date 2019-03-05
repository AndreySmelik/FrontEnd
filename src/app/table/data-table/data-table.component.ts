import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import {PlayerService} from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})


export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() teamPlayer:number;
  dataSource: DataTableDataSource;

 
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','nick','position','country','points'];

  constructor(private playerService: PlayerService){}

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.paginator,this.sort,this.playerService);
  }
  addTeam(){
    this.dataSource = new DataTableDataSource(this.paginator,this.sort,this.playerService);
  }
}
