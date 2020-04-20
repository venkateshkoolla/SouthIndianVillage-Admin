import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'
import {RouterModule, Routes } from '@angular/Router';
import {MatButtonModule} from '@angular/material/button'

//containers
import {CustomerDashboardComponent} from './containers/customer-dashboard/customer-dashboard.component'
import { CustomerFormComponent } from './components/customer-form/customer-form.component'
import { CustomerViewerComponent } from './containers/customer-viewer/customer-viewer.component'


//components
import { CustomerCountComponent } from './components/customer-count.component'
import { CustomerDetailsComponent } from './components/customer-details.component'
import {ConfirmationPopoverModule} from 'angular-confirmation-popover'


// services
import {CustomerDashboardService} from './customer-dashboard.service'

const routes : Routes = [
    {
      path:'customers',
      children: [
        {path: '', component: CustomerDashboardComponent}, 
        {path: ':id', component: CustomerViewerComponent}],
     }
  ]
  
  @NgModule({
    declarations: [
      CustomerDashboardComponent,
      CustomerViewerComponent,
      CustomerCountComponent,
      CustomerDetailsComponent
      
    ],
    imports: [
      CommonModule,
      HttpModule,
      FormsModule,
      RouterModule.forRoot(routes),
      MatButtonModule,
      ConfirmationPopoverModule.forRoot({confirmButtonType: "Danger"})
    ],
    providers: [
        CustomerDashboardService,
        CustomerViewerComponent, 
        RouterModule
    ],

    exports : [CustomerDashboardComponent, CustomerViewerComponent, RouterModule]
  })
  export class CustomerDashboardModule {}