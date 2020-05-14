import { Component, OnInit } from '@angular/core';
import { StockInformation } from 'src/app/models/stock';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watchlists',
  templateUrl: './watchlists.component.html',
  styleUrls: ['./watchlists.component.css'],
})
export class WatchlistsComponent implements OnInit {
  watchlists: 
  constructor() {}

  ngOnInit(): void {}
}
