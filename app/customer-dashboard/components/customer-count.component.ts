import {Component, Input} from '@angular/core'
import { Customer, CustomerStatus } from '../models/customer.interface'

@Component({
    selector : 'customer-count',
    template : `
    <div>
    <h3>Customers</h3>
    <div>
    Active customers : {{ActiveCustomers()}} / {{items?.length}}        
    </div>    
    </div>
    `
})

export class CustomerCountComponent{
    @Input()
    items : Customer[];
    ActiveCustomers() : number {
        if(!this.items) return;
        return this.items.filter((customer : Customer) => {
            return customer.Status == CustomerStatus.Active;
        }).length;
    }
}