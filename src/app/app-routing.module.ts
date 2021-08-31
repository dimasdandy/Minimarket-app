import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CanAccessService } from './services/can-access.service';
import { CanAuthorizedService } from './services/can-authorized.service';

const routes : Routes = [
  {
    path: "",
    loadChildren : () => import('./pages/home/home.module').then(m => m.HomeModule)
  }, 
  {
    path: "",
    loadChildren : () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "",
    component: HomeComponent,
    loadChildren : () => import('./pages/user/user.module').then(m => m.UserModule)
  }, 
  {
    path: "",
    component: HomeComponent,
    loadChildren : () => import('./pages/role/role.module').then(l => l.RoleModule)
  },

  {
    path: "",
    component: HomeComponent,
    loadChildren : () => import('./pages/product/product.module').then(m => m.ProductModule)
  }, 
  {
    path: "",
    component: HomeComponent,
    loadChildren : () => import('./pages/payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: "",
    component: HomeComponent,
    loadChildren : () => import('./pages/member/member.module').then(m => m.MemberModule)
  }, 
  {
    path: "",
    component: HomeComponent,
    loadChildren : () => import('./pages/category/category.module').then(l => l.CategoryModule)
  },
  {
    path: "",
    component: HomeComponent,
    loadChildren : () => import('./pages/cart/cart.module').then(l => l.CartModule)
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
