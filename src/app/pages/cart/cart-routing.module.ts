import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartInsertComponent } from './cart-insert/cart-insert.component';
import { RouterModule, Routes } from '@angular/router';
import { CartListDetailComponent } from './cart-list-detail/cart-list-detail.component';
import { CanAccessService } from 'src/app/services/can-access.service';
import { CanAuthorizedService } from 'src/app/services/can-authorized.service';

const routes : Routes = [
  {
    path: "cart-list",
    component: CartListComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "cart-insert",
    component: CartInsertComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "cart-detail-list/:idHdr",
    component: CartListDetailComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule { }
