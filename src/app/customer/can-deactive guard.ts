    
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CustomerEditComponent } from './customer-edit.component';
import { Observable } from 'rxjs';

@Injectable()
export class CanDeactivateGaurd implements CanDeactivate<CustomerEditComponent> {
    canDeactivate(
        component: CustomerEditComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return  confirm('would you leave the page without saving the data ');
    }
}