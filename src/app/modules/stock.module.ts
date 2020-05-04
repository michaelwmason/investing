import { NgModule } from '@angular/core'

import { StockComponent } from '../components/stock/stock.component'
import { StockRoutingModule } from './stock-routing.module'

@NgModule({
  declarations: [StockComponent],
  imports: [StockRoutingModule],
  providers: []
})
export class StockModule {}
