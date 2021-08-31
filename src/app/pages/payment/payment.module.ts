import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentInsertComponent } from './payment-insert/payment-insert.component';
import { PaymentUpdateComponent } from './payment-update/payment-update.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonEventModule } from 'src/app/components/atoms/button-event/button-event.module';
import { InputFormModule } from 'src/app/components/molecules/input-form/input-form.module';
// import { ButtonModule } from 'src/app/components/atoms/button/button.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    PaymentListComponent,
    PaymentInsertComponent,
    PaymentUpdateComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
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
    PaymentListComponent,
    PaymentInsertComponent,
    PaymentUpdateComponent
  ]
})
export class PaymentModule { }
