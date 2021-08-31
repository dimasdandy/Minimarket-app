import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DeleteUserReqDto } from 'src/app/models/user-dto/delete-user-req-dto';
import { FindAllPathUsersResData } from 'src/app/models/user-dto/find-all-path-users-res-data';
import { UserService } from 'src/app/services/user.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class UserListComponent implements OnInit {

  deleteUserReq = new DeleteUserReqDto();
  data: FindAllPathUsersResData[] = []
  constructor(private userService: UserService, private title: Title, private route: Router,
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.title.setTitle('User List');
    this.initData();
  }

  update(id?: number): void {
    this.route.navigate(['/user-update/' + id])
  }

  initData(): void {
    this.userService.getAll().toPromise().then(res => {
      this.data = res.data!
    })
  }

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'DeleteConfirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.userService.delete(id).toPromise().then(res => {
          this.initData();
        })
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            break;
          case ConfirmEventType.CANCEL:
            break;
        }
      }
    });
  }

  confirm(id: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.delete(id).toPromise().then(res => {
          this.initData();
        })
      },
      reject: () => {

      }
    });
  }
}
