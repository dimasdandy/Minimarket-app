import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessService } from '../../services/can-access.service';
import { CanAuthorizedService } from 'src/app/services/can-authorized.service';

const routes : Routes = [
  {
    path: "home",
    component: HomeComponent,
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
export class HomeRoutingModule { }
