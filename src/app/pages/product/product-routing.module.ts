import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { CanAccessService } from 'src/app/services/can-access.service';
import { CanAuthorizedService } from 'src/app/services/can-authorized.service';

const routes : Routes = [
  {
    path: "product-list",
    component: ProductListComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "product-insert",
    component: ProductInsertComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "product-update/:id",
    component: ProductUpdateComponent,
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
export class ProductRoutingModule { }
