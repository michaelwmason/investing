import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StartupComponent } from '../components/startup.component/startup.component';
import { AppComponent } from '../components/app.component/app.component';
import { WatchlistTableComponent } from '../components/investing-table.component/watchlist-table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { StockService } from '../services/stock.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login.component/login.component';
import { UserService } from '../services/user.service';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    WatchlistTableComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [StockService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
