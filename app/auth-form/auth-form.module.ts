import {NgModule} from '@angular/core'
import { AuthFormComponent } from './auth-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/Router';
import { AuthFormService } from './auth-form.service';

@NgModule({
    declarations : [
        AuthFormComponent
    ],
    
    imports: [
        CommonModule,
        FormsModule
    ],

    providers: [
        AuthFormService,
    ],

    exports: [AuthFormComponent]
})

export class AuthFormModule{

}