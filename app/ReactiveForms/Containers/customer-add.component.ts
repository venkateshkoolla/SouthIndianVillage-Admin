import { Component, Input } from '@angular/core'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { Customer, CustomerStatus, CustomerStatusLabelMapping } from '../../customer-dashboard/models/customer.interface';
import { CustomerDashboardService } from '../../customer-dashboard/customer-dashboard.service';
import { CustomerValidators } from '../customer.validators';

@Component({
    selector: 'customer-add',
    styleUrls: ['customer-add.component.scss'],
    templateUrl: 'customer-add.component.html'
})

export class CustomerAddComponent {

    form: FormGroup
    customer: Customer;
    customers: Customer[];
    isCustomerExists: boolean = false;
    editCustomer: Customer
    
    public CustomerStatusLabelMapping = CustomerStatusLabelMapping;
    public customerStatus = Object.values(CustomerStatus).filter(value => typeof value === 'number');;
    orderType: string[] = ["Tiffin service", "Catering"];

    constructor(private customerDashboardService: CustomerDashboardService,
        private router: Router) {
        console.log("OncustomerAddComponent", customerDashboardService.currentCustomer);
        this.editCustomer = customerDashboardService.currentCustomer;
    }    

    ngOnInit() {
        this.form = new FormGroup({
            id: new FormControl(this.editCustomer?.id),
            firstName: new FormControl(this.editCustomer?.firstName, [Validators.required]),
            lastName: new FormControl(this.editCustomer?.lastName),
            phoneNumber: new FormControl(this.editCustomer?.phoneNumber, [Validators.required, CustomerValidators.ValidatePhoneNumber],
                this.validateCustomerExists.bind(this)),
            postalCode: new FormControl(this.editCustomer?.postalCode),
            status: new FormControl(this.editCustomer?.status, [Validators.required]),
            orderType: new FormControl(this.editCustomer?.orderType, [Validators.required]),
            email: new FormControl(this.editCustomer?.email, [CustomerValidators.ValidateEmail]),
            address: new FormControl(this.editCustomer?.address),
            notes: new FormControl(this.editCustomer?.notes)
        })
    }

    OnSubmit(customer: Customer) {
        if (!this.editCustomer) {
            this.customerDashboardService.addCustomer(this.form.value)
                .subscribe((customer: Customer) => {
                    this.customer = customer;
                }, (error) => { throw ("Error thrown on adding customer.") })

            this.router.navigate(['/customers']);
        } else {
            this.customerDashboardService.updateCustomer(this.form.value)
                .subscribe((customer: Customer) => {
                    this.customer = customer;
                }, (error) => { throw ("Error thrown update customer.") })
            this.router.navigate(['/customers']);
        }
    }

    validateCustomerExists(control: AbstractControl) {
        this.isCustomerExists = false;
        return this.customerDashboardService.getCustomers()
            .pipe(map((response: Customer[]) => {
                response.forEach(element => {
                    if (element.phoneNumber == control.value) {
                        this.isCustomerExists = true;
                        return this.isCustomerExists;
                    }
                });
            }))
    }
    validateCustomerExists1(control: AbstractControl) {
        this.isCustomerExists = false;
        return this.customerDashboardService.checkCustomerExists(control.value)
            .pipe(map((response: any) => {
                return response ? null : { isCustomerExists: true }
            }))
    }

    OnCancelClick() {
        this.router.navigate(['/customers']);
    }
}