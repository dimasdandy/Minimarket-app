import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateDataReqDto } from 'src/app/models/role-dto/update-data-req-dto';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.css']
})
export class RoleUpdateComponent implements OnInit {

  role = new UpdateDataReqDto();

  constructor(private title: Title, private roleService : RoleService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle('Role Update');

    this.activatedRoute.params.subscribe(res => {
      this.roleService.getById(res.id).subscribe(res => {
        this.role.id = res.data?.id
        this.role.name = res.data?.name
        this.role.code = res.data?.code
        this.role.isActive = res.data?.isActive
        this.role.version = res.data?.version
      })
    })
  }

  onClick() : void {
    this.roleService.update(this.role).subscribe(res => {
      this.route.navigate(['/role-list'])
    })
  }

}
