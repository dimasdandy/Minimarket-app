import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberInsertComponent } from './member-insert/member-insert.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { CanAccessService } from 'src/app/services/can-access.service';
import { CanAuthorizedService } from 'src/app/services/can-authorized.service';

const routes : Routes = [
  {
    path: "member-list",
    component: MemberListComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "member-insert",
    component: MemberInsertComponent,
    canActivate: [CanAccessService, CanAuthorizedService]
  },
  {
    path: "member-update/:id",
    component: MemberUpdateComponent,
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
export class MemberRoutingModule { }
