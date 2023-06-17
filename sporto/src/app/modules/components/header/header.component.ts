import { Component, OnInit } from '@angular/core';
import { UniversalDeviceDetectorService } from 'src/app/_shared/providers/device-detector/device-detector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
username :string= '';
deviceInfo :any;
  constructor(private deviceService :UniversalDeviceDetectorService) { 
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo)
  }

  ngOnInit(): void {
  }

}
