import {Component, Output, EventEmitter} from '@angular/core'

@Component({
    selector : 'auth-remember',
    template : `
    <div>
    <label>
        <input type = "checkbox" name= "rememberMe" 
        (change) = "OnRemember($event.target.checked)">
        Keep me logged in</label>
    </div>
    `
})

export class AuthRememberComponent{

    @Output()
    remember: EventEmitter<boolean> = new EventEmitter<boolean>();

    OnRemember(value: boolean){
        this.remember.emit(value);
    }
}