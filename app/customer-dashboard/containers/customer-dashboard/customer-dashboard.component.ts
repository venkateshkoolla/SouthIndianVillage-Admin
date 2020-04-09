import {Component, OnInit} from '@angular/core'
import {Customer, CustomerStatus, CustomerDetail} from '../../models/customer.interface'
import { stringify } from 'querystring';


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
    constructor(){
    this.title = 'Angular title from me';
  }
  ngOnInit(){
    this.customers = [
      { Id : 1,
        FirstName : "Pawan",
        PhoneNumber : "647-926-8497",
        PostalCode : "L4T1V7",
        Address: "",
        Status: CustomerStatus.Active,
        Details :[
          { CustomNotes : "2 Times Non veg per week"},
          { CustomNotes: "No Fruits, Instead egg!"}]        
      },

      { Id : 2,
        FirstName : "Peri",
        PhoneNumber : "647-894-0665",
        PostalCode : "",
        Address : "180 Forum Drive Mississauga",
        Status : CustomerStatus.Hold,
        Details: [{CustomNotes : "No Yogurt!"},
                  {CustomNotes : "Possibly extra sambar."}
                 ]  
      },

      { Id : 3,
        
        FirstName : "Vijay",
        PhoneNumber : "7055593820",
        PostalCode : "L4T1X3",
        Address : "Not Given",
        Status : CustomerStatus.Enquiry
  
      },

      { Id : 4,
        
        FirstName : "Jay",
        PhoneNumber : "916-221-8383",
        PostalCode : "",
        Address : "Lisgar",
        Status : CustomerStatus.Enquiry
      }
    ];
  }
  handleRemove(event : Customer){
console.log('Remove event fired!')
  this.customers = this.customers.filter((customer: Customer) => 
    {
      return customer.Id !== event.Id;
    });
  }

    handleEdit($event){
    console.log('Remove event fired!')
      }

}