import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateMembersReqDto } from 'src/app/models/member-dto/update-members-req-dto';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.css']
})
export class MemberUpdateComponent implements OnInit {

  member = new UpdateMembersReqDto();
  constructor(private title: Title, private membersService : MemberService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle('Member Update');

    this.activatedRoute.params.subscribe(res => {
      this.membersService.getById(res.id).subscribe(res => {
        this.member.id = res.data?.id
        this.member.name = res.data?.name
        this.member.address = res.data?.address
        this.member.point = res.data?.point
        this.member.phoneNo = res.data?.phoneNo
        this.member.isActive = res.data?.isActive
        this.member.version = res.data?.version
      })
    })
  }

  onClick() : void {
    this.membersService.update(this.member).subscribe(res => {
      this.route.navigate(['/member-list'])
    })
  }
}
