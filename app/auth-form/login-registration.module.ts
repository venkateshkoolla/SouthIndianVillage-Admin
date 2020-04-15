import {NgModule} from '@angular/core'
import { AuthFormComponent } from './auth-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/Router';
import { LoginRegistrationComponent } from './login-registration.component';


const routes : Routes = [
    {
      path:'login' ,component: LoginRegistrationComponent 
     }
  ]

@NgModule({
    declarations : [
        LoginRegistrationComponent
    ],
    
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],

    exports: [LoginRegistrationComponent]
})

export class LoginRegistrationModule{

}