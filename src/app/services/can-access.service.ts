import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanAccessService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const path = route.url[0].path

    if (!this.authService.isLogin()) {
      if (path != 'login') {
        this.router.navigate(['/login'])
      }
      return false;
    }
    return true;
  }
}
