import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.Component';
import { NotFoundComponent } from './not-Found.Component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import { format } from 'url';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormModule } from './auth-form/auth-form.module';
import { LoginRegistrationComponent } from './auth-form/login-registration.component';


const routes : Routes = [
  {path:'' , component: HomeComponent, pathMatch: 'full'  },
  {path:'login' , component: LoginRegistrationComponent, pathMatch: 'full'  },
  {path:'**' , component: HomeComponent  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthFormComponent,
    LoginRegistrationComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    // custom modules
    CustomerDashboardModule
    
  ],

  bootstrap: [
    AppComponent
  ],
})

export class AppModule {

}
