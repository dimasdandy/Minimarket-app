import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartInsertComponent } from './cart-insert/cart-insert.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartListDetailComponent } from './cart-list-detail/cart-list-detail.component';
// import { ButtonModule } from 'src/app/components/atoms/button/button.module';
import { ButtonEventModule } from 'src/app/components/atoms/button-event/button-event.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    CartListComponent,
    CartInsertComponent,
    CartListDetailComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ButtonModule,
    ButtonEventModule,
    FormsModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    BadgeModule
  ],
  exports: [
    CartListComponent,
    CartInsertComponent,
    CartListDetailComponent
  ]
})
export class CartModule { }
