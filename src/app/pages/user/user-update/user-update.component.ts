import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAllPathRolesResData } from 'src/app/models/role-dto/find-all-path-roles-res-data';
import { UpdateUserReqDto } from 'src/app/models/user-dto/update-user-req-dto';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  data: FindAllPathRolesResData[] = []
  user = new UpdateUserReqDto();
  constructor(private title: Title, private userService: UserService, private roleService: RoleService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle('User Update');

    this.roleService.getAll().subscribe(res => {
      this.data = res.data!
    })

    this.activatedRoute.params.subscribe(res => {
      this.userService.getById(res.id).subscribe(res => {
        this.user.id = res.data?.id
        this.user.name = res.data?.name
        this.user.username = res.data?.username
        this.user.role = res.data?.role
        this.user.isActive = res.data?.isActive
        this.user.version = res.data?.version
      })
    })
  }

  onClick(): void {
    this.userService.update(this.user).subscribe(res => {
      this.route.navigate(['/user-list'])
    })
  }
}
