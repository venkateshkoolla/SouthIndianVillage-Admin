import {Component} from '@angular/core'
import {FormGroup, FormControl} from '@angular/forms'
import { Customer } from '../../customer-dashboard/models/customer.interface';
import { CustomerDashboardService } from '../../customer-dashboard/customer-dashboard.service';

@Component({
    selector : 'customer-add',
    styleUrls : ['customer-add.component.scss'],
    templateUrl: 'customer-add.component.html'
})

export class CustomerAddComponent{
    customers : Customer[];
    customerStatus : string[] =
    [
        "Active", "Hold", "Enquiry", "Closed"
    ];

    orderType: string[] = ["Tiffin service", "Catering"];

    form = new FormGroup({
        customer: new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            phoneNumber: new FormControl(),
            postalCode: new FormControl(),
            status: new FormControl(),
            orderType: new FormControl(),
            email: new FormControl(),
            address: new FormControl(),
            notes: new FormControl()
        })
    })

    constructor(private customerService: CustomerDashboardService)
    {
    }

    OnSubmit(event: Customer){
        this.customerService.addCustomer(this.form.value)
        .subscribe((data: Customer)=>{
          this.customers.map((customer : Customer) => {
              customer = Object.assign({}, customer, this.form.value);
            console.log("Added customer:", customer);
            return customer;
            });
        },(error) => {throw("Error thrown from API on add customer............!!!!")})           
        console.log(this.customers);
        }
}