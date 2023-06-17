import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    private location :Location) { }

  ngOnInit(): void {}


  goBack(){
 this.location.back()

  }

}
