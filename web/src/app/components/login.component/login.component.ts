import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BehaviorSubject } from 'rxjs';
import { InvestingUser } from 'src/app/models/investing-user';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: FormControl;
  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.username = this.formBuilder.control({
      value: '',
      disabled: false,
    });
  }

  login(): void {
    this.userService.login(this.username.value).subscribe(() => {
      this.router.navigate(['watchlist']);
    });
  }
}
