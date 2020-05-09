import { Component, OnInit } from '@angular/core'
import { StockService } from 'src/app/services/stock.service'
import { Observable } from 'rxjs'
import { Stock } from 'src/app/models/stock'
import { ActivatedRoute } from '@angular/router'
import { tap } from 'rxjs/operators'
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  ticker: string
  stock$: Observable<Stock>

  constructor(
    private stockService: StockService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ticker = this.activatedRoute.snapshot.data.ticker
    this.stock$ = this.stockService
      .findByTicker(this.ticker)
      .pipe(tap(s => console.log(s)))
  }
}
