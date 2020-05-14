import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watchlist-entry',
  templateUrl: './watchlist-entry.component.html',
  styleUrls: ['./watchlist-entry.component.css'],
})
export class WatchlistEntryComponent implements OnInit {
  @Input() symbol: string;

  constructor() {}
  ngOnInit() {}
}
