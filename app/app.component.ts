import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <customer-dashboard></customer-dashboard>
    </div>
  `
})
export class AppComponent {

}
