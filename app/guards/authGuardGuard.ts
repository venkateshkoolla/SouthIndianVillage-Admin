import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { AuthFormService } from '../auth-form/auth-form.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {

    constructor(private route: Router, private authService: AuthFormService) {

    }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            console.log("Authenticated11.")
            return true;
        } else {
            this.route.navigate(['/login']);
            alert("user must be logged in to access this module");
            return false;
        }

        // return false;
        // if (token == null || token == undefined) {
        //     this.route.navigate(['/login']);
        //     alert("user must be logged in to access this module");
        //     return false;
        // }
        // else { return true; }
    }

}