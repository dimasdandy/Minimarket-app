import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InsertDataReqDto } from 'src/app/models/role-dto/insert-data-req-dto';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-role-insert',
  templateUrl: './role-insert.component.html',
  styleUrls: ['./role-insert.component.css']
})
export class RoleInsertComponent implements OnInit {

  roleReq = new InsertDataReqDto();

  constructor(private title: Title, private roleService : RoleService, private route : Router) { }

  ngOnInit(): void {
    this.title.setTitle('Role Insert');
  }

  onClick() : void{
    this.roleService.insert(this.roleReq).subscribe(res => {
      this.route.navigate(['/role-list'])
    })
  }

}
