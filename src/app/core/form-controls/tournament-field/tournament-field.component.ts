import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ListTournamentService } from 'src/app/services/listtournament.service';

@Component({
  selector: 'app-tournament-field',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TournamentFieldComponent),
      multi: true
    }
  ],
  templateUrl: './tournament-field.component.html',
  styleUrls: ['./tournament-field.component.scss']
})
export class TournamentFieldComponent implements OnInit {
  @Input() name : string;
  @Input() placeholder = 'Введите значение';
  @Input() required = false;
  
  private _value: any;

  tournaments=[];
  constructor(private listTournamentService: ListTournamentService) { }

  ngOnInit() {
    this.getListTournament();
  }
  

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }

  getListTournament() {
   this.listTournamentService.getListTournament()
        .subscribe((res: any) => this.handleTeam(res));
  }

  handleTeam(res:any) {
    if (res){
       res.forEach(element => {
         let teamm={value:'',id:0};
         teamm.value=element.tournamentName;
         teamm.id=element.id;
         this.tournaments.push(teamm);
      });
       }
  }
}
