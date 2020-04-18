import {Component, OnInit} from '@angular/core'
import {Customer, CustomerStatus, CustomerDetail} from '../../models/customer.interface'
import { stringify } from 'querystring';
import {CustomerDashboardService} from '../../customer-dashboard.service'

@Component({
    selector : 'customer-dashboard',
    styleUrls : ['customer-dashboard.component.scss'],
    template:`
    <div> 
    <customer-count [items] = "customers"></customer-count>
    <br>
    
  <div id = "customer-details">
  <customer-details *ngFor="let customer of customers; index as i"
        [rowNumber] = "i"
        [detail] = "customer"
        (edit) = "handleEdit($event)"
        (remove) = "handleRemove($event)">
    </customer-details>
  </div>
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
  this.customerService.removeCustomer(event.id)
  .subscribe((data : Customer) => {
    this.customers = this.customers.filter((customer: Customer) => 
    {
      return customer.id !== event.id;
    });
  },(error) => {throw("Error thrown from API on Remove............!!!!")})
}

  handleEdit(event: Customer){
    console.log("new logging on edit!!!!!!!!!",event);
      this.customerService.updateCustomer(event)
      .subscribe((data: Customer)=>{
        this.customers.map((customer : Customer) => {
          if(customer.id === event.id)
          {
            customer = Object.assign({}, customer, event);
          }
          return customer;
          });
      },(error) => {throw("Error thrown from API on Edit............!!!!")})           
      console.log(this.customers);
      }

}