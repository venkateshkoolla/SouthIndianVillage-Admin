import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.Component';
import { CustomerDashboardComponent } from './customer-dashboard/containers/customer-dashboard/customer-dashboard.component';
import { LoginRegistrationComponent } from './auth-form/login-registration.component';
import { CustomerAddComponent } from './ReactiveForms/Containers/customer-add.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CanActivateRouteGuard } from './guards/canActivateRouteGuard';
import { AuthGuardGuard } from './guards/authGuardGuard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomerDashboardComponent, canActivate: [AuthGuardGuard] },
  { path: 'AddCustomer', component: CustomerAddComponent , canActivate: [AuthGuardGuard]},
  { path: 'Payment', component:  CreditCardComponent},
  { path: 'login', component: LoginRegistrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes), 
    //   CanActivateRouteGuard
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }