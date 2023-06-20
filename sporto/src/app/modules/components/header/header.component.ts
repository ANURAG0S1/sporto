import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UniversalDeviceDetectorService } from 'src/app/_shared/providers/device-detector/device-detector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  username: string = '';
  loginStatus = false;
  deviceInfo: any;
  constructor(private deviceService: UniversalDeviceDetectorService) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo);
  }

  ngOnInit(): void {
    this.loginStatus = localStorage.getItem('login') == 'true' ? true : false;
  }

  ngAfterViewInit(): void {
    if (this.loginStatus) {
      let data: any = JSON.parse(localStorage.getItem('user') as string);
      if (data && data.username && data.name) {
        this.username = data.name;
      } else {
        localStorage.setItem('login', 'false');
      }
    }
  }
}
