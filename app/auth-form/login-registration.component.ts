import {Component} from '@angular/core'
import { User } from './auth-form.interface';

@Component({
    selector: 'login-registration',
    styleUrls : ['login-registration.component.scss'],
    template: `
    <div>
    
    <auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type = "submit">Submit</button>
    </auth-form>
    
    
    <auth-form
        (submitted)="loginUser($event)">
            <h3>Login</h3>
            <auth-remember
                (remember) = "rememberMe($event)">
            </auth-remember>
        <button type = "submit">Login</button>
    </auth-form>    
    
    </div>
    `

})

export class LoginRegistrationComponent{

    remember : boolean = false;

    createUser(user: User) {
        console.log('Create account', user);
      }
    
      loginUser(user: User) {
        console.log('Login', user, this.remember);
      }

      rememberMe(value: boolean){
        console.log("remember event received");
        this.remember = value;
      }
}