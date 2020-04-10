import { Injectable } from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';

import { Customer } from "./models/customer.interface";

const CUSTOMER_API : string = '/api/customers';

@Injectable()
export class CustomerDashboardService{
    constructor(private http : Http)
    {     
    }

    getCustomers(): Observable<Customer[]>    {
        return this.http
                   .get(CUSTOMER_API)
                   .map((response: Response) => response.json())
                   .catch((error: any) => Observable.throw(error.json())
                   );                                        
    }

    getCustomer(id : number): Observable<Customer>    {
        return this.http
                   .get(`${CUSTOMER_API}/${id}`)
                   .map((response: Response) => response.json())
                   .catch((error: any) => Observable.throw(error.json())
                   );                                        
    }
    
    updateCustomer(customer : Customer):   Observable<Customer>{

        let headers = new Headers({
            'content-type': 'application/json'
        });

        let options = new RequestOptions(
           {headers : headers}
        );
            console.log(customer);
        return this.http
                   .put(`${CUSTOMER_API}/${1}`, customer, options)
                   .map((response: Response) => response.json())
                   .catch((error: any) => Observable.throw(error.json())
                   );                   
    }

    removeCustomer(id : number):   Observable<Customer>{
        return this.http
                   .delete(`${CUSTOMER_API}/${id}`)
                   .map((response: Response) => response.json())
                   .catch((error: any) => Observable.throw(error.json())); 
    }
}