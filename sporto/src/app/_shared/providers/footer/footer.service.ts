import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FooterService {
  public appliedFilters = new Subject();
  activeItem = 'home';


  constructor() {}

  defaultDataInit() {}

 
  get activeTab() {
    return this.activeItem;
  }

  set activeTab(item) {
    this.activeItem = item;
    this.appliedFilters.next(this.activeItem);
  }
}
