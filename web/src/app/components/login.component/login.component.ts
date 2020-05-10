import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BehaviorSubject } from 'rxjs';
import { InvestingUser } from 'src/app/models/investing-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) {}

  login(username: string) {
    this.userService.login(username).subscribe(() => {
      this.router.navigate(['watchlist']);
    });
  }
}
