export class Player {
    points: number;
    fullName: string;
    nickName: string;
    position: string;
    country: string;
    team_id: number;
    constructor(data?: any) {
        if (data) {
          Object.assign(this, data);
        }
    }
}