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
  
    <div class = "app-root">
    <nav class="nav">
        <a 
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }">
          {{ item.name }}
        </a>
      </nav>      
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'LOGIN',
      exact: true
    },
    {
      link: '/Home',
      name: 'HOME',
      exact: true
    },
    {
      link: '/customers',
      name: 'CUSTOMERS',
      exact: true
    },
    {
      link: '/AddCustomer',
      name: 'ADD-CUSTOMER',
      exact: true
    },  
    {
      link: '/payment',
      name: 'PAYMENT',
      exact: true
    }
    // {
    //   link: '/oops',
    //   name: '404',
    //   exact: false
    // }
  ];
}

// <div>
//       <customer-dashboard></customer-dashboard>
//      </div>    
//      <div>
//      <customer-viewer></customer-viewer>
//     </div>
