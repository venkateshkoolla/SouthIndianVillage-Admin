import {Component, Input} from '@angular/core'
import { Customer, CustomerStatus } from '../models/customer.interface'

@Component({
    selector : 'customer-count',
    templateUrl : 'customer-count.component.html'
})

export class CustomerCountComponent{
    @Input()
    items : Customer[];
    ActiveCustomers() : number {
        if(!this.items) 
        {           
            return;
        }
        return this.items.filter((customer : Customer) => {
            console.log("Customer status:", customer.status);
            console.log("Customer object:", customer);
            return customer.status == CustomerStatus.Active;
        }).length;
    }
}