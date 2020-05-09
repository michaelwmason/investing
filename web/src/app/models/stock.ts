export class StockInformation {
  symbol: string;
  currentPrice: string;
  high: string;
  low: string;
  open: string;
  change: string;
  percentChange: string;

  constructor(obj: object) {
    const quote = obj['Global Quote'];
    this.symbol = quote['01. symbol'];
    this.currentPrice = quote['05. price'];
    this.high = quote['03. high'];
    this.low = quote['04. low'];
    this.open = quote['02. open'];
    this.change = quote['09. change'];
    this.percentChange = quote['10. change percent'];
  }
}

export class StockNotes {
  id: string;
  ticker: string;
  notes: Note[];
  '01 big a': string;
}

export class Note {
  id: string;
  title: string;
  content: string;
}
