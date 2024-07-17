import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, MaybeAsync, GuardResult } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class CanActivateUser implements CanActivate {
  constructor(private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const isLoggedIn = this.authService.isLoggedIn()
    if (!isLoggedIn) {
      return this.authService.getLocalSession()
    }
    return isLoggedIn
  }
}
