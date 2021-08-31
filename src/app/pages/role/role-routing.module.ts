import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleInsertComponent } from './role-insert/role-insert.component';
import { RoleUpdateComponent } from './role-update/role-update.component';
import { RouterModule, Routes } from '@angular/router';
import { CanAuthorizedService } from 'src/app/services/can-authorized.service';
import { CanAccessService } from 'src/app/services/can-access.service';

const routes : Routes = [
  {
    path: "role-list",
    component: RoleListComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "role-insert",
    component: RoleInsertComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "role-update/:id",
    component: RoleUpdateComponent,
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
export class RoleRoutingModule { }
