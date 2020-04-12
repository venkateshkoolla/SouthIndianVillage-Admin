import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.Component';
import { NotFoundComponent } from './not-Found.Component';
import { CommonModule } from '@angular/common';

const routes : Routes = [
  {path:'' , component: HomeComponent, pathMatch: 'full'  },
  {path:'**' , component: NotFoundComponent  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
   
    // custom modules
    CustomerDashboardModule
  ],

  bootstrap: [
    AppComponent
  ],
})

export class AppModule {

}
