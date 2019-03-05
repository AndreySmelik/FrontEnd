import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputFieldComponent} from './input-field/input-field.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatSelectModule, MatOptionModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { SelectFieldComponent } from './select-field/select-field.component';
import { TeamService } from 'src/app/services/team.service';
import { TournamentFieldComponent } from './tournament-field/tournament-field.component';

@NgModule({
  declarations: [InputFieldComponent, SelectFieldComponent, TournamentFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
   MatTableModule,
   MatSelectModule,
   MatOptionModule
  ],
  exports: [
    InputFieldComponent,
    SelectFieldComponent,
    TournamentFieldComponent
  ],
 
})
export class FormControlsModule {
}
