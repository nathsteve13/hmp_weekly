import { Component } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    defineCustomElements(window);
  }
}
