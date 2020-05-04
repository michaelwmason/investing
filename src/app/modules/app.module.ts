import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { StartupComponent } from '../components/startup.component/startup.component'
import { AppComponent } from '../components/app.component/app.component'
import { InvestingTableComponent } from '../components/investing-table.component/investing-table.component'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [AppComponent, StartupComponent, InvestingTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
