import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberInsertComponent } from './member-insert/member-insert.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MemberRoutingModule } from './member-routing.module';
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
    MemberListComponent,
    MemberInsertComponent,
    MemberUpdateComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
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
    MemberListComponent,
    MemberInsertComponent,
    MemberUpdateComponent
  ]
})
export class MemberModule { }
