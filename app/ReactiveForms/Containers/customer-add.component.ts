import {Component} from '@angular/core'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
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
    
    constructor(private customerService: CustomerDashboardService, 
        private router: Router)
    {
    }

    customer : Customer;
    isCustomerExists: boolean = false;
 
    public CustomerStatusLabelMapping = CustomerStatusLabelMapping;
    public customerStatus = Object.values(CustomerStatus).filter(value => typeof value === 'number');;
    orderType: string[] = ["Tiffin service", "Catering"];

    form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl(),
            phoneNumber: new FormControl('', [Validators.required, CustomerValidators.ValidatePhoneNumber],
            this.validateCustomerExists.bind(this)),
            postalCode: new FormControl(),
            status: new FormControl('', [Validators.required]),
            orderType: new FormControl('', [Validators.required]),
            email: new FormControl('', [CustomerValidators.ValidateEmail]),
            address: new FormControl(),
            notes: new FormControl()
    })


    OnSubmit(event: Customer){
        this.customerService.addCustomer(this.form.value)
        .subscribe((customer: Customer)=>
        {
            this.customer = customer;
        },(error) => {throw("Error thrown from API on add customer............!!!!")})

        this.router.navigate(['/customers']);    
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
    validateCustomerExists1(control: AbstractControl)
    {
        this.isCustomerExists = false;
        console.log("phone number",control.value);
        return this.customerService.checkCustomerExists(control.value)
            .pipe(map((response: any) =>
                {
                    console.log("response", response);

                    return response ? null : {isCustomerExists: true}
                }))
    }

    OnCancelClick(){
        this.router.navigate(['/customers']);    
    }
}