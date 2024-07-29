import { Injectable } from '@angular/core';
import { CanActivate, MaybeAsync, GuardResult, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map } from 'rxjs';

@Injectable()
export class CanActivateUser implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canActivate(): MaybeAsync<GuardResult> {
    const isLoggedIn = this.authService.isLoggedIn();
    if (!isLoggedIn) {
      return this.authService.loadProfile().pipe(
        map((user) => !!user),
        catchError(() => this.router.navigateByUrl('/login')),
      );
    }
    return true;
  }
}
