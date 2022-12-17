import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "./users.service";


@Injectable({
    providedIn: 'root'
  })
export class isLogged implements CanActivate {
    get user(): any {
        return this.userService.user;
    }
    constructor(private userService: UsersService, private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.user && this.user.id) {
            return true;
        } else {
            this.router.navigate(['/auth/login']);
            return false;
        }

    }

}