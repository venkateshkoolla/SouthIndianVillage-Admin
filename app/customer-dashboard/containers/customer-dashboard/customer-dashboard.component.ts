import {Component, OnInit} from '@angular/core'
import {Customer, CustomerStatus, CustomerDetail} from '../../models/customer.interface'
import { stringify } from 'querystring';
import {CustomerDashboardService} from '../../customer-dashboard.service'
import {Router} from '@angular/router';


@Component({
    selector : 'customer-dashboard',
    styleUrls : ['customer-dashboard.component.scss'],
    templateUrl:'customer-dashboard.component.html'
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
  constructor(private customerService : CustomerDashboardService,
    private router: Router)
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
      }

  btnClick= function () {
         this.router.navigate(['/AddCustomer']);
};

}