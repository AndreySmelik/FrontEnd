import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/classes/team.class';

@Component({
  selector: 'app-select-field',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectFieldComponent),
      multi: true
    }
  ],
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit, ControlValueAccessor {
  @Input() name : string;
  @Input() placeholder = 'Введите значение';
  @Input() required = false;
  
  
  private _value: any;
  teams =[];
  constructor(private teamService: TeamService) {  }

  ngOnInit() {
    this.getTeam();
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

        getTeam() {
   this.teamService.getTeam()
        .subscribe((res: any) => this.handleTeam(res));
  }

  handleTeam(res:any) {
    if (res){
       res.forEach(element => {
         let teamm={value:'',id:0};
         teamm.value=element.teamName;
         teamm.id=element.id;
         this.teams.push(teamm);
      });
       }
  }
}
