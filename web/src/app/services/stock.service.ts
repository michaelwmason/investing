import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockInformation } from '../models/stock';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class StockService {
  constructor(private http: HttpClient) {}

  all(): Observable<StockInformation[]> {
    return of([mockStock, mockStock2]);
  }

  getQuoteInfo(symbol: string): Observable<StockInformation> {
    return this.http
      .get(
        'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo'
      )
      .pipe(
        map((obj) => new StockInformation(obj)),
        tap(console.log)
      );
  }
}

export const mockStock: StockInformation = {
  symbol: 'TST',

  currentPrice: '100',
} as StockInformation;
export const mockStock2: StockInformation = {
  symbol: 'MCK',

  currentPrice: '100',
} as StockInformation;
