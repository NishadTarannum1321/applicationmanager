import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ICustomer, IApiResponse } from '../../shared/interfaces';
import { Observable } from 'rxjs';
@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }
    getCustomers(url): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(url);
    }

    getCustomerById(id): Observable<ICustomer> {
        const url = '/api/customers/';
        console.log(' data service' + id);
        return this.http.get<ICustomer>(url + id)
        .pipe(
            map((customer) => {
                return customer;
            })
        );
    }
    getStates(): Observable<any> {
        return this.http.get('api/states');
    }
    insertCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.post<ICustomer>('/api/customers', customer);
    }

    updateCustomer(customer: ICustomer): Observable<boolean> {
        return this.http.put<IApiResponse>('/api/customers/' + customer.id, customer).pipe(
            map(res => res.status)
        );
    }
    deleteCustomer(id: number): Observable<boolean> {
        return this.http.delete<IApiResponse>('/api/customers/' + id).pipe(
            map(res => res.status)
        );
    }
}