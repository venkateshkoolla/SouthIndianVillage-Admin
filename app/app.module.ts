import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module'
import { AppComponent } from './app.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { HomeComponent } from './home.Component';
import { NotFoundComponent } from './not-Found.Component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormModule } from './auth-form/auth-form.module';
import { LoginRegistrationComponent } from './auth-form/login-registration.component';
import { AuthRememberComponent } from './auth-form/auth-remember.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CustomerAddComponent } from './ReactiveForms/Containers/customer-add.component';
import { AppRoutingModule } from './app-routing.module';
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
  accessToken: string = localStorage.getItem('token');
}
