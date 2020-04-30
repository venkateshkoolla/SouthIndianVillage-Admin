import { Component, EventEmitter, Output, ElementRef, ViewChild, Input } from '@angular/core'
import { User } from './auth-form.interface';
import { AuthFormService } from './auth-form.service';
import { Router } from '@angular/router';
import { access } from 'fs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'auth-form',
    styleUrls: ['auth-form.component.scss'],
    templateUrl: 'auth-form.component.html'
})

export class AuthFormComponent {
    constructor() {
    }

    formControls = new FormGroup({
        first: new FormControl('email'),
        last: new FormControl('password')
     });
     

    @ViewChild('email')
    email: ElementRef;

    @ViewChild('password')
    password: ElementRef;

    @Output()
    submitted: EventEmitter<User> = new EventEmitter();

    @Input()
    isRegistrationDone: EventEmitter<boolean> = new EventEmitter();

    onSubmit(user: User) {
        this.submitted.emit(user);        
    }

    ngAfterViewInit() {
        this.email.nativeElement.setAttribute('placeholder', 'Enter email address');
        this.email.nativeElement.focus();
        this.password.nativeElement.setAttribute('placeholder', 'Enter password');
        console.log(this.email);
    }

    ngOnChanges() {

    }
}