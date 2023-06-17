import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SVG_ICONS } from 'src/assets/icons/svg.icons';
import { environment } from 'src/environments/environment';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root',
})
export class SvgService {
  iconsFolder: string = '/assets/icons/';
  iconsFolderRelative: string = '../../../../assets/icons/';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private appService: AppService
  ) {}

  registerIcons() {
    SVG_ICONS.forEach((icon:any) => {
      const url = this.appService.isBrowser
        ? this.iconsFolderRelative + icon.name + '.svg'
        : environment.baseUrl + this.iconsFolder + icon.name + '.svg';
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(url)
      );
    });
  }
}
