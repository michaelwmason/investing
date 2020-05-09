import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Stock } from '../models/stock'
import { Observable, of } from 'rxjs'

@Injectable()
export class StockService {
  constructor(private http: HttpClient) {}

  all(): Observable<Stock[]> {
    return of([mockStock, mockStock2])
  }

  findByTicker(ticker: string): Observable<Stock> {
    return of([mockStock, mockStock2].find(stock => stock.ticker === ticker))
  }
}

export const mockStock: Stock = { id: '1', ticker: 'TST', name: 'Test Company' }
export const mockStock2: Stock = {
  id: '2',
  ticker: 'MCK',
  name: 'Mock Company'
}
