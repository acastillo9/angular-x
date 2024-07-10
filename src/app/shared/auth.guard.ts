import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, MaybeAsync, GuardResult, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class CanActivateUser implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const isLoggedIn = this.authService.isLoggedIn()
    if (!isLoggedIn) {
      this.router.navigateByUrl('/login')
    }
    return isLoggedIn
  }
}
