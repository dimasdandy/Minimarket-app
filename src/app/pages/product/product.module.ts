import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonEventModule } from 'src/app/components/atoms/button-event/button-event.module';
// import { ButtonModule } from 'src/app/components/atoms/button/button.module';
import { InputFormModule } from 'src/app/components/molecules/input-form/input-form.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductInsertComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ButtonModule,
    InputFormModule,
    ButtonEventModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    MessageModule,
    MessagesModule,
    RadioButtonModule
  ],
  exports: [
    ProductListComponent,
    ProductInsertComponent,
    ProductUpdateComponent
  ]
})
export class ProductModule { }
