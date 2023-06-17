import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';

import { environment } from 'src/environments/environment';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { DeviceDetectorService } from 'ngx-device-detector';
import { isPlatformServer } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class AppService  {
  BASE_URL: string = environment.baseUrl;
  isBrowser: boolean=false;
  isMobile: boolean = false;
  isIos: boolean = false;



  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional() @Inject(REQUEST) protected request: Request,
    private httpClient: HttpClient,
    private deviceDetectorService: DeviceDetectorService
  ) {
 
 
    this.getDeviceInfo();
  }

  /** Might be required in near future to detect Chrome */
  // private _detectChrome() {
  //   if (this.isBowser) {
  //     const info = this.deviceService.getDeviceInfo();
  //     const browser = info.browser;
  //     return browser === "Chrome";
  //   }
  //   return false;
  // }

  /**
   * Save Device Info
   */
  getDeviceInfo() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isIos = this.isIOS();

    this.setUrls();
  }

  /** Might be required in near future to detect IOS */
  private isIOS() {
    const iDevices = ['Mac', 'iOS'];
    const os = this.deviceDetectorService.getDeviceInfo().os;

    return iDevices.indexOf(os) >= 0;
  }

  /**
   * Set Urls
   */
  setUrls() {
    let baseUrl = environment.baseUrl;
    if (this.isBrowser) {
      const hostname = window.location.hostname;
      if (!hostname.includes('www.')) {
        baseUrl = baseUrl.replace('www.', '');
      }
      this.BASE_URL = baseUrl;
    } else {
      this.BASE_URL = baseUrl;
    }
  }

}
