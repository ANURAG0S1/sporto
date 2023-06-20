import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/_shared/providers/footer/footer.service';
import { academies_data } from '../../academies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
acadData  = academies_data;

  constructor(private footerService :FooterService,private router : Router) { }

  ngOnInit(): void {
    this.footerService.activeTab = 'academies';
  }



  openAcademyDetails(id:number){
    this.router.navigate(['academies/details'],{
      queryParams:{
        academy_id:id
      }
    })
  }

}
