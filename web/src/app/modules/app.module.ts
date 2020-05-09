import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { StartupComponent } from '../components/startup.component/startup.component'
import { AppComponent } from '../components/app.component/app.component'
import { InvestingTableComponent } from '../components/investing-table.component/investing-table.component'
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http'
import { StockService } from '../services/stock.service'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [AppComponent, StartupComponent, InvestingTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule {}
