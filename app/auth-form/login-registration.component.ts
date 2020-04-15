import {Component} from '@angular/core'
import { User } from './auth-form.interface';

@Component({
    selector: 'login-registration',
    template: `
    <div  display = "flex">
    <auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type = "submit">Submit</button>
    </auth-form>
    <auth-form
        (submitted)="loginUser($event)">
        <h3>Login</h3>
        <button type = "submit">Login</button>
    </auth-form>
    </div>
    `

})

export class LoginRegistrationComponent{

    createUser(user: User) {
        console.log('Create account', user);
      }
    
      loginUser(user: User) {
        console.log('Login', user);
      }
}