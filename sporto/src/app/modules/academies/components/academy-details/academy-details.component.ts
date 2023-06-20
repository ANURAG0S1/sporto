import { Component, OnInit } from '@angular/core';
import { academies_data } from './../../academies';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-academy-details',
  templateUrl: './academy-details.component.html',
  styleUrls: ['./academy-details.component.scss'],
})
export class AcademyDetailsComponent implements OnInit {
  loading = true;
  acadData = academies_data;
  currentAcadData:any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private location : Location
  ) {}

  ngOnInit(): void {
    console.log('first')
    this.subscribeEvents();
    setTimeout(() => {
      console.log(this.currentAcadData[0])
    }, 200);

  }

  subscribeEvents() {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.loading = true;
      if (queryParams) {
        if (queryParams['academy_id'] && queryParams['academy_id'].length) {
          this.currentAcadData=  academies_data.filter(item=>{
            return item.id == queryParams['academy_id'];
          })
        }
      }
    });
  }

  goBack(){
    this.location.back()
   
     }
}
