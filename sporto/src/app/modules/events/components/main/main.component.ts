import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/_shared/providers/footer/footer.service';
import { eventsData } from '../../events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  eventsData = eventsData

  constructor(private footerService : FooterService,private router:Router) { }

  ngOnInit(): void {
    this.footerService.activeTab = 'events';
  }

  openEventDetails(id:any){this.router.navigate(['events/details'],{queryParams:{event_id:id}})}

}
