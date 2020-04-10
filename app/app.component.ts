import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';


interface Nav{
  link: string
  name: string
  exact : boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class = "nav">
        <a *ngFor = "let n of nav" 
        [routerLink] = "n.link" 
        routerLinkActive = "Active"> {{n.name}} </a>
      </nav>
      <router-outlet></router-outlet>    
    </div>
  `
})

export class AppComponent {

  nav : Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    },
    {
      link: '/Register',
      name: 'Register',
      exact: false
    },
    {
      link: '/customers',
      name: 'Customers',
      exact: false
    }
  ]

}

// <div>
//       <customer-dashboard></customer-dashboard>
//      </div>    
//      <div>
//      <customer-viewer></customer-viewer>
//     </div>
