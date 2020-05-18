import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { InvestingUserDto } from '../models/investing-user';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  currentUser$: BehaviorSubject<InvestingUserDto> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  login(username: string): Observable<InvestingUserDto> {
    return this.httpClient
      .get<InvestingUserDto>(`${environment.baseEndpoint}/user/login/${username}`)
      .pipe(tap((user) => this.currentUser$.next(user)));
  }
}
