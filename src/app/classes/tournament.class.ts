export class Tournament {
    win: number;
    defeats: number;
    team_id:number;
    listtournament_id:number;
    constructor(data?: any) {
        if (data) {
          Object.assign(this, data);
        }
    }
}