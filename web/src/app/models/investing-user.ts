import { Watchlist } from './watchlist';

export class InvestingUser {
  id: string;
  createdDate: Date;
  updatedDate: Date;
  firstName: string;
  lastName: string;
  userName: string;
  watchlists: Watchlist[];
}
