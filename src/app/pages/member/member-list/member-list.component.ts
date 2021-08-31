import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllPathMembersResData } from 'src/app/models/member-dto/find-all-path-members-res-data';
import { MemberService } from 'src/app/services/member.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class MemberListComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private memberService: MemberService, private title: Title, private route: Router) { }

  data: FindAllPathMembersResData[] = []

  ngOnInit(): void {
    this.title.setTitle('Member List');
    this.initData();
  }

  update(id?: number): void {
    this.route.navigate(['/member-update/' + id])
  }

  initData(): void {
    this.memberService.getAll().toPromise().then(res => {
      this.data = res.data!
    })
  }

  delete(id: number, event: Event): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.memberService.delete(id).toPromise().then(res => {
          this.initData();
        })
      },
      reject: () => {

      }
    });
  }

}
