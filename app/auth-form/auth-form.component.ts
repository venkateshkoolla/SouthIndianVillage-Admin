import {Component, EventEmitter, Output} from '@angular/core'
import {FormsModule} from '@angular/forms'
import { User } from './auth-form.interface';

@Component({
    selector : 'auth-form',
    styleUrls : ['auth-form.component.scss'],
    template: `
    <div class = "div">
    <form class = "form" (ngSubmit) = "OnSubmit(form.value)" #form = "ngForm" >
        <ng-Content select= "h3"></ng-Content>
        <div>
            <label>
                Email:<input type="text" name="email" ngModel >
            </label>
        </div>
        <div>
            <label>
                Password:<input type="text" name= "password" ngModel >
            </label>
        </div>
        <ng-Content></ng-Content>
    </form>
</div>`
})

export class AuthFormComponent{

    @Output()
    submitted: EventEmitter<User> = new EventEmitter();

    OnSubmit(value: User){
        this.submitted.emit(value);
    }
}