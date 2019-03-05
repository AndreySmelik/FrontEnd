import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ListTournamentService } from 'src/app/services/listtournament.service';

// TODO: Replace this with your own data model type
export interface ListTournamentTableItem {
  tournamentName: string;
  id: number;
  maxNumberTeam: number;
  prize: number;
  date: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ListTournamentTableItem[] = [
  {id: 1, tournamentName: 'Дифенс',maxNumberTeam: 16, prize: 1,date: '25 февраля 2019 года'},
  {id: 4, tournamentName: 'Рыбинск олл старз',maxNumberTeam: 16, prize: 1000000000,date: '25 февраля 2019 года'},
  {id: 2, tournamentName: 'Эпицентр',maxNumberTeam: 16, prize: 100000,date: '25 февраля 2019 года'},
  {id: 3, tournamentName: 'ESL KATOWICE',maxNumberTeam: 16, prize: 1000,date: '25 февраля 2019 года'},
  {id: 5, tournamentName: 'Dream lige',maxNumberTeam: 16, prize: 10000,date: '25 февраля 2019 года'},
  {id: 6, tournamentName: 'Minor',maxNumberTeam: 16, prize: 25000,date: '25 февраля 2019 года'},
  {id: 7, tournamentName: 'Major',maxNumberTeam: 16, prize: 100000,date: '25 февраля 2019 года'},
  {id: 8, tournamentName: 'Super major',maxNumberTeam: 16, prize: 250000,date: '25 февраля 2019 года'},
  {id: 9, tournamentName: 'International',maxNumberTeam: 16, prize: 16000000,date: '25 февраля 2019 года'},

 
];

/**
 * Data source for the ListTournamentTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListTournamentTableDataSource extends DataSource<ListTournamentTableItem> {
  
  getListTournament() {
    this.listTournamentService.getListTournament()
        .subscribe((res: any) => this.handleListTournament(res));
          
    }
  
    handleListTournament(res:any){
       if (res){
        console.log('call res', res);
         res.forEach(element => {
          let dataTableItem: ListTournamentTableItem = {id: 0, tournamentName: '',maxNumberTeam:0,prize:0,date:''};
          dataTableItem.id = element.id;
          dataTableItem.maxNumberTeam = element.maxNumberTeam;
          dataTableItem.tournamentName = element.tournamentName;
          dataTableItem.prize = element.prize;
          dataTableItem.date = element.date;
          this.data.push(dataTableItem);
         });
       }
  
    }
  
    data: ListTournamentTableItem[]=[];

  constructor(private paginator: MatPaginator, private sort: MatSort, private listTournamentService: ListTournamentService) {
    super();
    this.getListTournament();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ListTournamentTableItem[]> {
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
  private getPagedData(data: ListTournamentTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ListTournamentTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'tournamentName': return compare(a.tournamentName, b.tournamentName, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'maxNumberTeam': return compare(+a.maxNumberTeam, +b.maxNumberTeam, isAsc);
        case 'prize': return compare(+a.prize, +b.prize, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
