import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/_shared/providers/footer/footer.service';

@Component({
  selector: 'app-academies',
  templateUrl: './academies.component.html',
  styleUrls: ['./academies.component.scss']
})
export class AcademiesComponent implements OnInit {

  constructor(private footerService :FooterService) { }

  ngOnInit(): void {
    this.footerService.activeTab = 'academies';
  }

}
