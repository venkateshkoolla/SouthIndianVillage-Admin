import {Component, Input} from '@Angular/core'
import { Customer } from '../../models/customer.interface'

@Component({
    selector : 'customer-form',
    styleUrls : ['customer-form.component.ts'],
    template: `
    <form>
    Form!!!!
        {{detail | json}}
    </form>
    `
})

export class CustomerFormComponent {
    
    @Input()
    detail: Customer
}