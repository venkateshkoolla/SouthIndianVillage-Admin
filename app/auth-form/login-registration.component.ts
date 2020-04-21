import {Component, EventEmitter, Output} from '@angular/core'
import { User } from './auth-form.interface';
import { AppComponent } from '../app.component';

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
    
    // @Output()
    // isLogin : EventEmitter<boolean> = new EventEmitter();

    createUser(user: User) {        
        console.log('Create account', user);
      }
    
      loginUser(user: User) {
        AppComponent.returned.next(true);
        // this.isLogin.emit(true);
        console.log('Loggedin as', user, this.remember);
      }

      rememberMe(value: boolean){
        console.log("remember event received");
        this.remember = value;
      }
}