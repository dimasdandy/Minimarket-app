import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleInsertComponent } from './role-insert/role-insert.component';
import { RoleUpdateComponent } from './role-update/role-update.component';
import { RoleRoutingModule } from './role-routing.module';
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
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    RoleListComponent,
    RoleInsertComponent,
    RoleUpdateComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
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
    RoleListComponent,
    RoleInsertComponent,
    RoleUpdateComponent
  ]
})
export class RoleModule { }
