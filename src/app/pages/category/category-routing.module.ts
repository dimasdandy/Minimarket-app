import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryInsertComponent } from './category-insert/category-insert.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CanAccessService } from 'src/app/services/can-access.service';
import { CanAuthorizedService } from 'src/app/services/can-authorized.service';

const routes : Routes = [
  {
    path: "category-list",
    component: CategoryListComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "category-insert",
    component: CategoryInsertComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "category-update/:id",
    component: CategoryUpdateComponent,
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
export class CategoryRoutingModule { }
