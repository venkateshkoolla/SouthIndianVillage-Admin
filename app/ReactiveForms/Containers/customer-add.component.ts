import {Component} from '@angular/core'
import { map } from 'rxjs/operators';

import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms'
import { Customer, CustomerStatus, CustomerStatusLabelMapping } from '../../customer-dashboard/models/customer.interface';
import { CustomerDashboardService } from '../../customer-dashboard/customer-dashboard.service';
import { CustomerValidators } from '../customer.validators';

@Component({
    selector : 'customer-add',
    styleUrls : ['customer-add.component.scss'],
    templateUrl: 'customer-add.component.html'
})

export class CustomerAddComponent{
    customer : Customer;
    isCustomerExists: boolean = false;
    // customerStatus : string[] =
    // [
    //     "Active", "Hold", "Enquiry", "Closed"
    // ];

    public CustomerStatusLabelMapping = CustomerStatusLabelMapping;
    public customerStatus = Object.values(CustomerStatus).filter(value => typeof value === 'number');;
    

    customerStatus1 : CustomerStatus;

    orderType: string[] = ["Tiffin service", "Catering"];

    form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl(),
            phoneNumber: new FormControl('', [Validators.required, CustomerValidators.ValidatePhoneNumber],
                         this.validateCustomerExists.bind(this)),
            postalCode: new FormControl(),
            status: new FormControl('', [Validators.required, CustomerValidators.ValidateStatus]),
            orderType: new FormControl('', [Validators.required]),
            email: new FormControl('', [CustomerValidators.ValidateEmail]),
            address: new FormControl(),
            notes: new FormControl()
    })

    constructor(private customerService: CustomerDashboardService)
    {
    }

    OnSubmit(event: Customer){
        this.customerService.addCustomer(this.form.value)
        .subscribe((customer: Customer)=>
        {
            this.customer = customer;
        },(error) => {throw("Error thrown from API on add customer............!!!!")})
    }

    validateCustomerExists(control: AbstractControl)
    {
        this.isCustomerExists = false;
        return this.customerService.getCustomers()
            .pipe(map((response: Customer[]) =>
                {
                    response.forEach(element => 
                    {
                        if(element.phoneNumber ==control.value)
                        {
                            this.isCustomerExists = true;
                            return this.isCustomerExists;
                        }
                    });
                }))
    }
}