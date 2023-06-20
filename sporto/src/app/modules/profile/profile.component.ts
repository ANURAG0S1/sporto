import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageHelper } from 'src/app/_shared/providers/app/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
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

  sendEmail(): void {
    const emailData = {
      recipient: 'anuragkush051@gmail.com',
      subject: 'Test Email',
      body: 'This is a test email sent from Angular.',
    };

    // this.http.post('/send-email', emailData).subscribe(
    //   (response: any) => {
    //     console.log('Email sent successfully:', response);
    //   },
    //   (error: any) => {
    //     console.log('Error sending email:', error);
    //   }
    // );
  }

  login() {
    var name = (<HTMLInputElement>document.getElementById('name')).value;
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

    if (username && username.length && password && password.length > 8) {
      let existingUser = JSON.parse(localStorage.getItem('users') as string);
      if (existingUser && existingUser.length) {
        let userIsAlreadythere = existingUser.filter((item: any) => {
          return username == item.username;
        });

        if (userIsAlreadythere && userIsAlreadythere.length) {
          this.toastr.error('username already exisits');
          return;
        }
      }

      let data = { username: username, password: password, name: name };

      localStorage.setItem('user', JSON.stringify(data));
      this.toastr.error('Account created. Login to continue ');
      this.router.navigate(['profile/login']);
    }
  }
}
