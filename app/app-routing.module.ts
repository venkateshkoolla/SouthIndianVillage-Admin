import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.Component';
import { CustomerDashboardComponent } from './customer-dashboard/containers/customer-dashboard/customer-dashboard.component';
import { LoginRegistrationComponent } from './auth-form/login-registration.component';
import { CustomerAddComponent } from './ReactiveForms/Containers/customer-add.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginRegistrationComponent },
  { path: 'customers', component: CustomerDashboardComponent },
  { path: 'AddCustomer', component: CustomerAddComponent },
  { path: 'Payment', component:  CreditCardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }