import {Component, OnInit} from '@angular/core'
import {Customer, CustomerStatus, CustomerDetail} from '../../models/customer.interface'
import { stringify } from 'querystring';
import {CustomerDashboardService} from '../../customer-dashboard.service'
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';

@Component({
    selector : 'customer-dashboard',
    styleUrls : ['customer-dashboard.component.scss'],
    template:`
    <div> 
    <customer-count [items] = "customers"></customer-count>
    <customer-details *ngFor="let customer of customers;"
        [detail] = "customer"
        (edit) = "handleEdit($event)"
        (remove) = "handleRemove($event)"
        ></customer-details>
    </div>
    ` 
})

export class CustomerDashboardComponent 
        implements OnInit{  

  title : string;
  logo : string = 'img/logo.svg'
  name : string = "";
  customers : Customer[];
  handleChange(value : string){
    this.name = value;
  }
  constructor(private customerService : CustomerDashboardService)
  {
  }

  ngOnInit()
  {
    this.customerService.getCustomers()
    .subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }
  handleRemove(event : Customer){

  this.customerService.removeCustomer(event.Id)
  .subscribe((data : Customer) => {
    this.customers = this.customers.filter((customer: Customer) => 
    {
      return customer.Id !== event.Id;
    });
  },(error) => {throw("Error thrown from API on Remove............!!!!")})
}

  handleEdit(event: Customer){
      this.customerService.updateCustomer(event)
      .subscribe((data: Customer)=>{
        this.customers.map((customer : Customer) => {
          if(customer.Id === event.Id)
          {
            customer = Object.assign({}, customer, event);
          }
          return customer;
          });
      },(error) => {throw("Error thrown from API on Edit............!!!!")})           
      console.log(this.customers);
      }

}