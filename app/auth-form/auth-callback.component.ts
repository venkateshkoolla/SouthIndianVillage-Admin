import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import { AuthFormService } from './auth-form.service'
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'app-auth-callback',
    styleUrls: ['./auth-callback.component.scss'],
    template: `
    <div *ngIf="error" class="row justify-content-center">
    <div class="col-md-8 text-center">
          <div class="alert alert-warning" role="alert">
            Oops, there was an error, please try to <a routerLink="/login">login again</a>.
          </div>
    </div>
</div>
    `
})

export class AuthCallbackComponent implements OnInit{

    error: boolean;
    constructor(private authService: AuthFormService, private router: Router,
        private route: ActivatedRoute){

    }
    async ngOnInit()
    {
        // check for error
    if (this.route.snapshot.fragment.indexOf('error') >= 0) {
        this.error=true; 
        return;    
      }
     
    //  await this.authService.completeAuthentication();      
    //  this.router.navigate(['/customers']);
    }
}