import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/_shared/providers/footer/footer.service';
import axios from '../../../../axios-config';
import { baseUrl } from 'src/app/_helpers/configuration';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  liveData: any;
  loading: boolean = true;
  currentSport = 'cricket';
;
  constructor(
    private footerService: FooterService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.footerService.activeTab = 'news';
    this.fetchFeed();
  }

  fetchFeed(currentSport = 'cricket') {
    axios.get(baseUrl + 'feed/' + currentSport).then(
      (res) => {
        console.log(res);
        if (res && res.data.data) {
          this.loading = false;
          let data = res.data.data.slice(0, 5);
          console.log(data);
          this.liveData = data;
        } else {
          console.log('error in fetching feed');
        }
      },
      (error) => {
        this.loading = false;
        this.toastr.error(error);
        console.log(error);
      }
    );
  }

  selectSport(event: any) {
    this.loading = true;
    this.fetchFeed(event.target.value);
  }
}
