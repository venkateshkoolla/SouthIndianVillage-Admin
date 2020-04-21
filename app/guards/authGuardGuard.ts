import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'

@Injectable()
export class AuthGuardGuard implements CanActivate {

    constructor(private route : Router){

    }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        var token = localStorage.getItem('token');
        if (token == null || token == undefined) {
            this.route.navigate(['/login']);
            alert("user must be logged in to add customer");
            return false;
        }
        else { return true; }
    }

}