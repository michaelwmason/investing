import { Component, OnInit } from '@angular/core';
import { StockInformation } from 'src/app/models/stock';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watchlist-table',
  templateUrl: './watchlist-table.component.html',
  styleUrls: ['./watchlist-table.component.css'],
})
export class WatchlistTableComponent implements OnInit {
  stocks$: Observable<StockInformation[]>;
  displayedColumns = ['ticker', 'name'];

  constructor(private router: Router, private stockService: StockService) {}

  ngOnInit(): void {
    this.stocks$ = this.stockService.all();
  }

  navigate(row: StockInformation): void {
    this.router.navigate([`stock/${row.symbol}`]);
  }
}
