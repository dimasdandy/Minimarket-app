import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryInsertComponent } from './category-insert/category-insert.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryRoutingModule } from './category-routing.module';
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
    CategoryListComponent,
    CategoryInsertComponent,
    CategoryUpdateComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
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
    CategoryListComponent,
    CategoryInsertComponent,
    CategoryUpdateComponent
  ]
})
export class CategoryModule { }
