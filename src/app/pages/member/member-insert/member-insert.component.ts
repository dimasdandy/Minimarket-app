import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllPathMembersResData } from 'src/app/models/member-dto/find-all-path-members-res-data';
import { InsertMembersReqDto } from 'src/app/models/member-dto/insert-members-req-dto';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-insert',
  templateUrl: './member-insert.component.html',
  styleUrls: ['./member-insert.component.css']
})

export class MemberInsertComponent implements OnInit {

  memberReq = new InsertMembersReqDto();
  data: FindAllPathMembersResData[] = []

  constructor(private title: Title, private memberService : MemberService, private route : Router ) { }

  ngOnInit(): void {
    this.title.setTitle('Member Insert');
  }

  onClick(): void{
    this.memberService.insert(this.memberReq).subscribe(res => {
      this.route.navigate(['/member-list'])
    })
  }
}
