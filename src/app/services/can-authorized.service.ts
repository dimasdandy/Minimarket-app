import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanAuthorizedService implements CanActivate{

  cashierPath = ['cart-list', 'cart-detail-list', 'cart-insert', 'home'] 

  constructor(private authService: AuthService, private router: Router, private toast: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const path = route.url[0].path
    if (this.authService.getProfile().role == 'KSR'){
      for(let i=0; i<this.cashierPath.length; i++){
        if(path.includes(this.cashierPath[i])){
          return true;
        }
      }
    } else{
      return true;
    }
    this.toast.warning('Forbidden Page');
    if(path != 'home'){
      this.router.navigate(['home'])
    }
    return false;
  }
}
