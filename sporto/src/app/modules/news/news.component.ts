import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/_shared/providers/footer/footer.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private footerService :FooterService) { }

  ngOnInit(): void {
    this.footerService.activeTab = 'news';
  }

}
