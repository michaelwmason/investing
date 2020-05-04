import { Component, OnInit } from '@angular/core'
import { Stock } from 'src/app/models/stock'
import { Router } from '@angular/router'

@Component({
  selector: 'app-investing-table',
  templateUrl: './investing-table.component.html',
  styleUrls: ['./investing-table.component.css']
})
export class InvestingTableComponent implements OnInit {
  stocks: Stock[] = [
    { ticker: 'FOO', name: 'Foo Company', id: '1' },
    { ticker: 'BAR', name: 'BAR Company', id: '2' }
  ]
  displayedColumns = ['ticker', 'name']
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(row: Stock): void {
    this.router.navigate([`stock/${row.ticker}`])
  }
}
