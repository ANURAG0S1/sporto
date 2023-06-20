import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FooterService } from 'src/app/_shared/providers/footer/footer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private footerService: FooterService
  ) {}

  ngOnInit(): void {
    this.subscribeEvents();
    this.footerService.activeTab = 'home';
  }

  subscribeEvents() {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.loading = true;
      if (queryParams) {
        if (queryParams['login']) {
          if (queryParams['login'] == true || queryParams['login'] == 'true') {
            this.toastr.success('Login Successfull');
          } else if (queryParams['login'] == 'skip') {
            console.log('Login Skipped');
            this.toastr.success('Login Skipped');
          }
        }
      }
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
