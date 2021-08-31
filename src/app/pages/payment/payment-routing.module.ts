import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentInsertComponent } from './payment-insert/payment-insert.component';
import { PaymentUpdateComponent } from './payment-update/payment-update.component';
import { CanAccessService } from 'src/app/services/can-access.service';
import { CanAuthorizedService } from 'src/app/services/can-authorized.service';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {
    path: "payment-list",
    component: PaymentListComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "payment-insert",
    component: PaymentInsertComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "payment-update/:id",
    component: PaymentUpdateComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class PaymentRoutingModule { }
