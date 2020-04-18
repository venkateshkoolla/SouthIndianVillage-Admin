import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { CustomerAddComponent } from './customer-add.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CustomerAddComponent],

    imports: [CommonModule,
                FormsModule,
                ReactiveFormsModule
        ],

    exports: [CustomerAddComponent]
})

export class CustomerAddModule{

}