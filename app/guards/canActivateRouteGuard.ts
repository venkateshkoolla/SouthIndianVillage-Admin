import {Injectable} from '@angular/core'
import {CanDeactivate} from '@angular/router'
import { CustomerAddComponent } from '../ReactiveForms/Containers/customer-add.component'

@Injectable()
export class CanActivateRouteGuard 
    implements CanDeactivate<CustomerAddComponent>{

    canDeactivate(component: CustomerAddComponent): boolean {
        return window.confirm("Ae you sure to navigate?");  
    }

}