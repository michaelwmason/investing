import { InvestingUserDto } from './investing-user';

export class WatchlistDto {
  id: string;
  createdDate: Date;
  updatedDate: Date;
  symbols: string[];
}
