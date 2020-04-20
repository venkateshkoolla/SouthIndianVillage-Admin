import { Injectable } from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, of} from 'rxjs';
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
                   .pipe(map((response: Response) => response.json()))
    }

    getCustomer(id : number): Observable<Customer>    {
        return this.http
                   .get(`${CUSTOMER_API}/${id}`)
                   .pipe(map((response: Response) => response.json()))}
    
    updateCustomer(customer : Customer):   Observable<Customer>{
        let headers = new Headers({
            'content-type': 'application/json'
        });
        let options = new RequestOptions(
           {headers : headers}
        );
                return this.http
                   .put(`${CUSTOMER_API}/${customer.id}`, customer, options)
                   .pipe(map((response: Response) => response.json()))                                     
    }

    addCustomer(customer: Customer): Observable<Customer>{
        return this.http
                   .post(`${CUSTOMER_API}`, customer)
                   .pipe(map((response: Response) => response.json()))                                     
    }

    removeCustomer(id : number):   Observable<Customer>{
        return this.http
                   .delete(`${CUSTOMER_API}/${id}`)
                   .pipe(map((response: Response) => response.json()))
    }

    checkCustomerExists(phoneNumber: string) : Observable<boolean>{
        let search = new URLSearchParams();
        
       return this.http.get(`${CUSTOMER_API}?phoneNumber=${phoneNumber}`)
            .pipe(map((response: Response) => response.json()))
            .pipe(map((response: any[]) => !!response.length))
            .pipe(catchError(err => 
                {
                    console.log('Handling error locally and rethrowing it...', err);
                    return throwError(err);
                }))
    }
}