import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Component} from '@angular/core';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import {FormControlsModule} from '../../core/form-controls/form-controls.module';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatSortModule, MatPaginatorModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {TeamService} from '../../services/team.service';
import {MatTableModule} from '@angular/material/table';
import { PlayerService } from '../../services/player.service';
import { TeamTableComponent } from 'src/app/table/team-table/team-table.component';
import { DataTableComponent } from 'src/app/table/data-table/data-table.component';


@NgModule({
  declarations: [
    MainPageComponent,
    DataTableComponent,
    TeamTableComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    FormControlsModule,
   MatButtonModule,
    MatTableModule,
   MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
   MatOptionModule
  ],
  providers: [
    TeamService
]

})
export class MainPageModule { }
