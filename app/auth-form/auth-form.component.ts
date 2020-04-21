import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core'
import { User } from './auth-form.interface';
import { AuthFormService } from './auth-form.service';
import { Router } from '@angular/router';
import { access } from 'fs';

@Component({
    selector: 'auth-form',
    styleUrls: ['auth-form.component.scss'],
    templateUrl: 'auth-form.component.html'
})

export class AuthFormComponent {

    constructor(private authService: AuthFormService, private route: Router) {

    }

    @ViewChild('email')
    email: ElementRef;

    @ViewChild('password')
    password: ElementRef;

    @Output()
    submitted: EventEmitter<User> = new EventEmitter();

    OnSubmit(value: User) {
        this.authService.getAccessToken(value.email)
            .subscribe((token: string) => {
                localStorage.setItem('token', token);
                if (localStorage.getItem("token") == null || localStorage.getItem("token") == undefined) {
                    this.route.navigate(['/login']);
                }
                else {
                    console.log('token defined');
                    this.submitted.emit(value);
                    this.route.navigate(['/customers']);
                }
            });

    }

    ngAfterViewInit() {
        this.email.nativeElement.setAttribute('placeholder', 'Enter email address');
        this.email.nativeElement.focus();
        this.password.nativeElement.setAttribute('placeholder', 'Enter password');
        console.log(this.email);
    }
}