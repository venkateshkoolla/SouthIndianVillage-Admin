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
  templateUrl: 'app.component.html'
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'LOGIN',
      exact: true
    },
    {
      link: '/Customers',
      name: 'CUSTOMERS',
      exact: true
    },
    {
      link: '/Home',
      name: 'HOME',
      exact: true
    },
    // {
    //   link: '/AddCustomer',
    //   name: 'ADD-CUSTOMER',
    //   exact: true
    // },  
    // {
    //   link: '/Payment',
    //   name: 'PAYMENT',
    //   exact: true
    // }
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
