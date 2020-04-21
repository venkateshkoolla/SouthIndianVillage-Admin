import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.Component';
import { NotFoundComponent } from './not-Found.Component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { format } from 'url';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormModule } from './auth-form/auth-form.module';
import { LoginRegistrationComponent } from './auth-form/login-registration.component';
import { AuthRememberComponent } from './auth-form/auth-remember.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CustomerAddComponent } from './ReactiveForms/Containers/customer-add.component';
import { CustomerDashboardComponent } from './customer-dashboard/containers/customer-dashboard/customer-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthFormService } from './auth-form/auth-form.service';
import { CanActivateRouteGuard } from './guards/canActivateRouteGuard';
import { AuthGuardGuard } from './guards/authGuardGuard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthRememberComponent,
    LoginRegistrationComponent,
    CreditCardComponent,
    CustomerAddComponent,
    NotFoundComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    ConfirmationPopoverModule.forRoot({ confirmButtonType: "Danger" }),

    // custom modules
    CustomerDashboardModule,
    AuthFormModule,
  ],

  providers: [
    // CanActivateRouteGuard,
    AuthGuardGuard
  ],

  bootstrap: [
    AppComponent
  ],
})

export class AppModule {

}
