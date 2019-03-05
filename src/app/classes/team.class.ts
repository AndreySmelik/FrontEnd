export class Team {

  teamName: string;
  region: string;
 
  constructor(data?: any) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
