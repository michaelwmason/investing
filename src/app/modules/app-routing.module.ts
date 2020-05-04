import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { InvestingTableComponent } from '../components/investing-table.component/investing-table.component'
import { StartupComponent } from '../components/startup.component/startup.component'

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table', component: InvestingTableComponent },
  { path: 'demo', component: StartupComponent },
  {
    path: 'stock',
    loadChildren: () => import('./stock.module').then(m => m.StockModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
