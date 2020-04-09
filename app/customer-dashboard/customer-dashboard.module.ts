import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

//containers
import {CustomerDashboardComponent} from './containers/customer-dashboard/customer-dashboard.component'

//components
import {CustomerCountComponent} from './components/customer-count.component'
import {CustomerDetailsComponent} from './components/customer-details.component'

@NgModule({
declarations : [CustomerDashboardComponent, 
                CustomerCountComponent, 
                CustomerDetailsComponent
                ],
imports : [CommonModule],
exports : [CustomerDashboardComponent]
})

export class CustomerDashboardModule {
    
}