import { Component } from '@angular/core';
import { DEFAULT_THEME } from './_helpers/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTheme = DEFAULT_THEME;
  title = 'sporto';

  loading=false;
}
