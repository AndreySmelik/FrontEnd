import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TeamService} from './services/team.service';
import {HttpClientModule} from '@angular/common/http';
//import { DataTableComponent } from './data-table/data-table.component';
import { PlayerService } from './services/player.service';
import { TournamentTableComponent } from './table/tournament-table/tournament-table.component';
import { ListTournamentTableComponent } from './table/list-tournament-table/list-tournament-table.component';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
//import { TeamTableComponent } from './team-table/team-table.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
