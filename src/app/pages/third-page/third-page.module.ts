import { NgModule } from '@angular/core';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ThirdPageRoutingModule } from './third-page-routing.module';
import { MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListTournamentTableComponent } from 'src/app/table/list-tournament-table/list-tournament-table.component';
import { FormControlsModule } from 'src/app/core/form-controls/form-controls.module';

@NgModule({
  declarations: [
    ThirdPageComponent,
    ListTournamentTableComponent
  ],
  imports: [
    ThirdPageRoutingModule,
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
export class ThirdPageModule { }
