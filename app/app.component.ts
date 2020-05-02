import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthFormService } from './auth-form/auth-form.service';

interface Nav {
  link: string
  name: string
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public static returned: Subject<any> = new Subject();
  isLoggedIn: boolean = false;

  constructor(private route: Router, private authService: AuthFormService) {
    AppComponent.returned.subscribe(res => {
      this.isLoggedIn = true;
    });
  }

  // isAuthenticated(){
  //   this.isLoggedIn = true;
  // }

  onLogoutClick() {
    // localStorage.clear();
    this.isLoggedIn = false;
    this.authService.logout()
      .subscribe((returnUrl: string) => {
        console.log("LogoutResponse:", returnUrl);
        this.route.navigate(['/login']);
      })

  }
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
  ];
}

