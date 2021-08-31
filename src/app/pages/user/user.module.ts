import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
// import { ButtonModule } from 'src/app/components/atoms/button/button.module';
import { InputFormModule } from 'src/app/components/molecules/input-form/input-form.module';
import { ButtonEventModule } from 'src/app/components/atoms/button-event/button-event.module';
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
    UserListComponent,
    UserInsertComponent,
    UserUpdateComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
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
    RadioButtonModule,
  ],
  exports: [
    UserListComponent,
    UserInsertComponent,
    UserUpdateComponent
  ],
})
export class UserModule { }
