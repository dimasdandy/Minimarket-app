import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateCategoriesReqDto } from 'src/app/models/category-dto/update-categories-req-dto';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  category = new UpdateCategoriesReqDto();
  constructor(private title: Title, private categoryService : CategoryService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle('Category Update');

    this.activatedRoute.params.subscribe(res => {
      this.categoryService.getById(res.id).subscribe(res => {
        this.category.id = res.data?.id
        this.category.name = res.data?.name
        this.category.code = res.data?.code
        this.category.isActive = res.data?.isActive
        this.category.version = res.data?.version
      })
    })
  }

  onClick() : void {
    this.categoryService.update(this.category).subscribe(res => {
      this.route.navigate(['/category-list'])
    })
  }

}
