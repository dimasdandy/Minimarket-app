import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllPathRolesResData } from 'src/app/models/role-dto/find-all-path-roles-res-data';
import { RoleService } from 'src/app/services/role.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RoleListComponent implements OnInit {

  constructor(private roleService: RoleService, private title: Title, private route: Router,
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  data: FindAllPathRolesResData[] = []

  ngOnInit(): void {
    this.title.setTitle('Role List');
    this.initData();
  }

  update(id?: number): void {
    this.route.navigate(['/role-update/' + id])
  }

  initData(): void {
    this.roleService.getAll().toPromise().then(res => {
      this.data = res.data!
    })
  }

  delete(id: number, event: Event): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.roleService.delete(id).toPromise().then(res => {
          this.initData();
        })
      },
      reject: () => {

      }
    });
  }

}
