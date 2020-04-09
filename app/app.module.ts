import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    
    // custom modules
    CustomerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
