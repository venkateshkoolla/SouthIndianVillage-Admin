import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { CustomerDashboardService } from '../../customer-dashboard.service';

import { Customer } from '../../models/customer.interface';

@Component({
  selector: 'customer-viewer',
  styleUrls: ['customer-viewer.component.scss'],
  template: `
    <form #form = "ngForm" noValidate (ngSubmit) = "HandleSubmit(form.value, true)">        
    <div>
    Id:
        <input type = "text" name = "id" required #id = "ngModel" [ngModel] = customer?.id>
    </div>
    <div>
    FirstName:
        <input type = "text" name = "firstName" required #firstName = "ngModel" [ngModel] = customer?.firstName>
        <div *ngIf = "firstName.errors?.required && firstName?.dirty " class = "error">
            FirstName is required.
        </div>        
    </div>
    <div>
    PhoneNumber:
        <input type = "text" name = "phoneNumber" required #phoneNumber = "ngModel" 
        [ngModel] = customer?.phoneNumber>
        <div *ngIf = "phoneNumber.errors?.required && phoneNumber?.dirty " class = "error">
            PhoneNumber is required.
        </div>
    </div>
    <div>
    PostalCode:
        <input type = "text" name = "postalCode" required #postalCode = "ngModel" 
        [ngModel] = customer?.postalCode >
        <div *ngIf = "postalCode.errors?.required && postalCode?.dirty" class = "error">
        PostalCode is required.
    </div>
    </div>
    <div>{{form.value | json}} </div>
    <div>
        <input type = "submit" value = "Update Customer"  [disabled] = "form.invalid">
    </div>
    </form>
  `
 })

export class CustomerViewerComponent implements OnInit {
  customer: Customer;

  @Output()
  update : EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerDashboardService) {}

  ngOnInit() {      
     this.route.params
     .switchMap((data: Customer) => {
         return  this.customerService.getCustomer(2)})
     .subscribe((data: Customer) => this.customer = data);
  }

  HandleSubmit(customer: Customer, isValid: boolean){
    if(isValid)
    {
        console.log(customer);
     this.customerService
     .updateCustomer(customer)
     .subscribe((data: Customer) =>{
        this.customer = Object.assign({}, this.customer, data);
     } );
    }
  }
}