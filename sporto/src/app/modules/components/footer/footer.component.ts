import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FooterService } from 'src/app/_shared/providers/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  activeItem: any = 'home';
  private _subscriptions = new Subscription();

  constructor(private router: Router, private footerService: FooterService) {}

  ngOnInit(): void {
    this.activeItem = this.footerService.activeTab;
    this.subscribeEvents();
  }

  subscribeEvents() {
    this._subscriptions.add(
      this.footerService.appliedFilters.subscribe((tab) => {
        this.activeItem = tab;
      })
    );
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
