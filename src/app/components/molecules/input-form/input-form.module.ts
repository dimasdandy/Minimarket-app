import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelFormComponent } from '../../atoms/label/label-form/label-form.component';
import { InputTextComponent } from '../../atoms/input-types/input-text/input-text.component';
import { InputFormComponent } from './input-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LabelFormComponent,
    InputTextComponent,
    InputFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    LabelFormComponent,
    InputTextComponent,
    InputFormComponent
  ]
})
export class InputFormModule { }
