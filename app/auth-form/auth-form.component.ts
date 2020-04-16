import {Component, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core'
import {FormsModule} from '@angular/forms'
import { User } from './auth-form.interface';

@Component({
    selector : 'auth-form',
    styleUrls : ['auth-form.component.scss'],
    template: `
    <div class = "div">
    <form class = "form" (ngSubmit) = "OnSubmit(form.value)" #form = "ngForm" >
        <ng-Content select= "h3"></ng-Content>        
            <label>
                Email:<input type="text" name="email" ngModel  #email>
            </label>
            <label>
                Password:<input type="text" name= "password" ngModel #password>
            </label>        
        <ng-Content select = "auth-remember"></ng-Content>
        <ng-Content select = "button"></ng-Content>
    </form>
</div>`
})

export class AuthFormComponent{

    @ViewChild('email')
    email : ElementRef;

    @ViewChild('password')
    password : ElementRef;

    @Output()
    submitted: EventEmitter<User> = new EventEmitter();

    OnSubmit(value: User){
        this.submitted.emit(value);
    }

    ngAfterViewInit(){
        this.email.nativeElement.setAttribute('placeholder', 'Enter email address');
        this.email.nativeElement.focus();
        this.password.nativeElement.setAttribute('placeholder', 'Enter password');
        console.log(this.email);
    }
}