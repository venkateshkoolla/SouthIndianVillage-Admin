import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover'
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
import { AuthRememberComponent } from './auth-form/auth-remember.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CustomerAddComponent } from './ReactiveForms/Containers/customer-add.component';


const routes : Routes = [
  {path:'' , component: LoginRegistrationComponent, pathMatch: 'full'  },
  {path:'home' , component: HomeComponent, pathMatch: 'full'  },
  {path:'payment' , component: CreditCardComponent, pathMatch: 'full'  },
  {path:'AddCustomer' , component: CustomerAddComponent, pathMatch: 'full'  },
  {path:'**' , component: HomeComponent  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthFormComponent,
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
    RouterModule.forRoot(routes),
    MatButtonModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: "Danger"}),

    // custom modules
    CustomerDashboardModule    
  ],

  bootstrap: [
    AppComponent
  ],
})

export class AppModule {

}
