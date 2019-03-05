import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { SecondPageComponent } from './second-page/second-page.component';
import { SecondPageRoutingModule } from './second-page-routing.module';
import { TournamentTableComponent } from 'src/app/table/tournament-table/tournament-table.component';
import { MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule } from '@angular/material';
import { FormControlsModule } from 'src/app/core/form-controls/form-controls.module';

@NgModule({
  declarations: [
    SecondPageComponent,
    TournamentTableComponent
  ],
  imports: [
    SecondPageRoutingModule,
    FormsModule,
    FormControlsModule,
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class SecondPageModule { }
