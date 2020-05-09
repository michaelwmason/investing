import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StockComponent } from '../components/stock/stock.component'

const routes: Routes = [{ path: ':ticker', component: StockComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {}
