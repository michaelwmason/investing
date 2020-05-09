import { NgModule } from '@angular/core'

import { StockRoutingModule } from './stock-routing.module'
import { StockComponent } from '../components/stock.component/stock.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [StockComponent],
  imports: [StockRoutingModule, CommonModule],
  providers: []
})
export class StockModule {}
