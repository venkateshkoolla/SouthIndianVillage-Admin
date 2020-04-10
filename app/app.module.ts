import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes } from '@angular/Router';
import { HomeComponent } from './home.Component';
import { NotFoundComponent } from './not-Found.Component';

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
    RouterModule.forRoot(routes),
    HttpModule,
    RouterModule,    
    
    // custom modules
    CustomerDashboardModule
  ],

  bootstrap: [
    AppComponent
  ],
})

export class AppModule {

}
