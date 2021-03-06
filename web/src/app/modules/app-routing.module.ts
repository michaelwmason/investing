import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistTableComponent } from '../components/watchlist-table.component/watchlist-table.component';
import { StartupComponent } from '../components/startup.component/startup.component';
import { LoginComponent } from '../components/login.component/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'watchlist', component: WatchlistTableComponent },
  { path: 'demo', component: StartupComponent },
  {
    path: 'stock',
    loadChildren: () => import('./stock.module').then((m) => m.StockModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
