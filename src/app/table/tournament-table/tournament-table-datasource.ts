import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { TournamentService } from 'src/app/services/tournament.service';
import { TeamService } from 'src/app/services/team.service';

// TODO: Replace this with your own data model type
export interface TournamentTableItem {
  teamName: string;
  id: number;
  win: number;
  defeats:number;
}
export interface TeamTour {
  id: number;
  value: string; 
}
var teams=[];
// TODO: replace this with real data from your application
const EXAMPLE_DATA: TournamentTableItem[] = [
  {id: 1, teamName: 'Кабан',win: 3,defeats:4},
  {id: 2, teamName: 'Gambit',win: 5,defeats:4},
  {id: 3, teamName: 'Navi',win: 6,defeats:0},
  {id: 4, teamName: 'fAnatic',win: 4,defeats:2},
  {id: 5, teamName: 'КБУ',win: 3,defeats:3},
  {id: 6, teamName: 'LGD',win: 2,defeats:4},
  {id: 7, teamName: 'OG',win: 1,defeats:5},
  {id: 8, teamName: 'Virtus Pro',win: 5,defeats:2},
];

/**
 * Data source for the TournamentTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TournamentTableDataSource extends DataSource<TournamentTableItem> {
  //data: TournamentTableItem[] = EXAMPLE_DATA;
  getTournament() {
    this.tournamentService.getTournament()
        .subscribe((res:any) => this.handleTournament(res));
          
    }
  
    handleTournament(res:any){
       if (res){
         res.forEach(element => {
          if (element.listtournament_id == this.tournamentService.tournamentName) {
          let dataTableItem: TournamentTableItem = {id: 0, teamName: '',defeats:0,win:0};
          dataTableItem.id = element.id;
          dataTableItem.teamName = teams[teams.findIndex(function(item){return item.id == element.team_id;})].value;
          dataTableItem.defeats = element.defeats;
          dataTableItem.win = element.win;
          this.data.push(dataTableItem);
          }
         });
       }
    }

    getTeam() {
      this.teamService.getTeam()
           .subscribe((rez: any) => this.handleTeam(rez));
     }
   
     handleTeam(rez:any) {
       if (rez){
          rez.forEach(element => {
            let teamm={value:'',id:0};
            teamm.value=element.teamName;
            teamm.id=element.id;
            teams.push(teamm);
         });
          }
     }
 
    data: TournamentTableItem[]=[];
  constructor(private paginator: MatPaginator, private sort: MatSort, private tournamentService: TournamentService, private teamService:TeamService) {
    super();
    this.getTeam();
    this.getTournament();
  
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TournamentTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TournamentTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TournamentTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'teamName': return compare(a.teamName, b.teamName, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'defeats': return compare(+a.defeats, +b.defeats, isAsc);
        case 'win': return compare(+a.win, +b.win, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
