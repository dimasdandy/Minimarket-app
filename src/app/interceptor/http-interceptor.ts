import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpService implements HttpInterceptor {

    constructor(private authService : AuthService, private toastService : ToastrService, private route : Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getProfile().token}`
            }
        });

        return next.handle(req)
            .pipe(
                tap(evt => {
                    if (evt instanceof HttpResponse) {
                        if (evt.status == 200) {
                            this.toastService.success('OK');
                        } 
                    }
                }),
                catchError(err => {
                    this.toastService.error(err.error.msg);
                    if (err.status == 401) {
                        this.route.navigate(['/login'])
                    } 
                    return of(err)
                }))
    }
}