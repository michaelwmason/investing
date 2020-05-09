import { Component, OnInit } from '@angular/core'
import { Stock } from 'src/app/models/stock'
import { Router } from '@angular/router'
import { StockService } from 'src/app/services/stock.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-investing-table',
  templateUrl: './investing-table.component.html',
  styleUrls: ['./investing-table.component.css']
})
export class InvestingTableComponent implements OnInit {
  stocks$: Observable<Stock[]>
  displayedColumns = ['ticker', 'name']

  constructor(private router: Router, private stockService: StockService) {}

  ngOnInit(): void {
    this.stocks$ = this.stockService.all()
  }

  navigate(row: Stock): void {
    this.router.navigate([`stock/${row.ticker}`])
  }
}
