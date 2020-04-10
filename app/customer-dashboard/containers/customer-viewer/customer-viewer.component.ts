import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CustomerDashboardService } from '../../customer-dashboard.service';

import { Customer } from '../../models/customer.interface';

@Component({
  selector: 'customer-viewer',
  styleUrls: ['customer-viewer.component.scss'],
  template: `
    <form #form = "ngForm" noValidate (ngSubmit) = "HandleSubmit(form.value, true)">
        {{customer | json}}
        <div name = "id" [ngModel] = customer?.id></div>    
    <div>
    FirstName:
        <input type = "text" name = "FirstName" required #FirstName = "ngModel" [ngModel] = customer?.FirstName>
        <div *ngIf = "FirstName.errors?.required && FirstName?.dirty " class = "error">
            FirstName is required.
        </div>        
    </div>
    <div>
    PhoneNumber:
        <input type = "text" name = "PhoneNumber" required #PhoneNumber = "ngModel" 
        [ngModel] = customer?.PhoneNumber>
        <div *ngIf = "PhoneNumber.errors?.required && PhoneNumber?.dirty " class = "error">
            PhoneNumber is required.
        </div>
    </div>
    <div>
    PostalCode:
        <input type = "text" name = "PostalCode" required #PostalCode = "ngModel" 
        [ngModel] = customer?.PostalCode >
        <div *ngIf = "PostalCode.errors?.required && PostalCode?.dirty" class = "error">
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

  constructor(private customerService: CustomerDashboardService) {}
  ngOnInit() {
    this.customerService
      .getCustomer(this.customer.Id)
      .subscribe((data: Customer) => this.customer = data);
      console.log(this.customer);
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