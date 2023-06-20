import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { eventsData } from '../../events';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss'],
})
export class EventsDetailComponent implements OnInit {
  loading: boolean = true;
  currentEventsData: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.subscribeEvents();
    console.log('ve')

    setTimeout(() => {
      console.log(this.currentEventsData)
    }, 400);
  }

  subscribeEvents() {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.loading = true;
      if (queryParams) {
        if (queryParams['event_id'] && queryParams['event_id'].length) {
          this.currentEventsData = eventsData.filter((item) => {
            return item.id == queryParams['event_id'];
          });
        }
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
