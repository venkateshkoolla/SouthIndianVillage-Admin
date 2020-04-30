import { Component, EventEmitter, Output, ElementRef, ViewChild, Input } from '@angular/core'
import { User } from './auth-form.interface';
import { AuthFormService } from './auth-form.service';
import { Router } from '@angular/router';
import { access } from 'fs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'auth-form',
    styleUrls: ['auth-form.component.scss'],
    templateUrl: 'auth-form.component.html'
})

export class AuthFormComponent {
    constructor() {
    }

    form = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    @ViewChild('email')
    email: ElementRef;

    @ViewChild('password')
    password: ElementRef;

    @Output()
    submitted: EventEmitter<User> = new EventEmitter();

    isFormValid: boolean
    isFormSubmitted: boolean

    onSubmit(user: User) {
        if (this.form.valid) {
            this.isFormValid = true;
            this.isFormSubmitted = true;
            this.submitted.emit(this.form.value);
        }
        else {
            this.isFormValid = false;
        }

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