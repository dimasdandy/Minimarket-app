import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllPathRolesResData } from 'src/app/models/role-dto/find-all-path-roles-res-data';
import { InsertUserReqDto } from 'src/app/models/user-dto/insert-user-req-dto';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {

  usersReq = new InsertUserReqDto();

  constructor(private title: Title, private roleService: RoleService, private userService: UserService, private route: Router) { }

  data: FindAllPathRolesResData[] = []

  ngOnInit(): void {
    this.title.setTitle('User Insert');
    this.roleService.getAll().subscribe(res => {
      this.data = res.data!
    })
  }

  onClick(): void {
    this.userService.insert(this.usersReq).subscribe(res => {
      this.route.navigate(['/user-list'])
    })
  }

}
