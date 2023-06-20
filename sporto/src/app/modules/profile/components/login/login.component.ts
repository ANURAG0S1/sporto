import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signup: boolean = true;

  constructor(
    private router: Router,
    private toastr: ToastrService //  private http: HttpClient
  ) {}
  ngOnInit(): void {}

  navigatePP() {
    this.router.navigate(['static/privacy-policy']);
  }

  skipLogin() {
    this.router.navigate(['/home'], {
      queryParams: {
        login: 'skip',
      },
    });
  }

  login() {
    var username = (<HTMLInputElement>document.getElementById('username'))
      .value;
    var password = (<HTMLInputElement>document.getElementById('password'))
      .value;

    console.log(username, password);

    if (!(username && username.length)) {
      this.toastr.error('please enter a valid username');
      return;
    }
    if (!(password && password.length)) {
      this.toastr.error('please enter a valid password');
      return;
    }

    let data = JSON.parse(localStorage.getItem('user') as string);
    if ((data.username = username)) {
      if (data.password != password) {
        this.toastr.error('invalid password');
      } else {
        localStorage.setItem('login', 'true');
        this.router.navigate(['home'], { queryParams: { login: true } });
      }
    }
  }
}
