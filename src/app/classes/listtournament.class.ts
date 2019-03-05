export class ListTournament {
    prize: number;
    tornamentName: string;
    maxNumberTeam: string;
    date: string;
    constructor(data?: any) {
        if (data) {
          Object.assign(this, data);
        }
    }
}