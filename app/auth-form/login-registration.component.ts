import { Component, EventEmitter, Output } from '@angular/core'
import { User } from './auth-form.interface';
import { UserRegistration } from './user-registration.interface';
import { AppComponent } from '../app.component';
import { AuthFormService } from './auth-form.service';
import { Router } from '@angular/router'

@Component({
    selector: 'login-registration',
    styleUrls: ['login-registration.component.scss'],
    template: `
    <div>    
    <auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <h1 *ngIf= "isRegistrationSuccess">Registration success.Please login!</h1>
        <h1 *ngIf= "registrationError && !isRegistrationSuccess">registrationError</h1>
        <button type = "submit">Register</button>
    </auth-form>
    
    <auth-form
        (submitted)="loginUser($event)">
            <h3>Login</h3>
            <auth-remember
                (remember) = "rememberMe($event)">
            </auth-remember>
            <h1 *ngIf = "loginError && !isLoginSuccess">Invalid username or password. Please try again.</h1>
        <button type = "submit">Login</button>
    </auth-form>    
    
    </div>
    `

})

export class LoginRegistrationComponent {

    constructor(private authService: AuthFormService, private route: Router) {

    }
    remember: boolean = false;
    isRegistrationSuccess: boolean = false;
    isLoginSuccess : boolean = false;
    registrationError: string;
    loginError : string;

    // @Output()
    // isLogin : EventEmitter<boolean> = new EventEmitter();

    createUser(user: User) {
        console.log('Create account', user);
        let r: UserRegistration = {
            Name: "test",
            Email: user.email,
            Password: user.password
        };

        this.authService.register(r)
            .subscribe(
                result => {
                    if (result) {
                        this.isRegistrationSuccess = true;
                        
                    }
                }, error => {
                    console.log("error on registration", error);
                    this.registrationError = error;
                    this.isRegistrationSuccess = false;
                })
    }

    loginUser(user: User) {
        this.authService.login(user)
            .subscribe((response: boolean) => {
                console.log("response", response);
                if (response) localStorage.setItem('isLoggedIn', 'true');
                if (!response){
                    console.log("isloggedIn", this.isLoginSuccess);
                    this.isLoginSuccess = false;
                    this.route.navigate(['/login']);
                }                

                else {
                    this.authService.getToken()
                        .subscribe((token: string) => {
                            if (token.length > 0) {
                                this.isLoginSuccess = true;
                                console.log("accessToken response:", token)
                                AppComponent.returned.next(true);
                                this.route.navigate(['/customers']);
                            }
                        })
                    // this.submitted.emit(user);
                }
            }, err => {
                this.loginError = err
                this.isLoginSuccess = false
            });
    }

    // loginUser(user: User){
    //     localStorage.setItem('user', JSON.stringify(user.email));
    //     localStorage.setItem('password', JSON.stringify(user.password));
    //     this.authService.login();
    // }

    rememberMe(value: boolean) {
        console.log("remember event received");
        this.remember = value;
    }
}