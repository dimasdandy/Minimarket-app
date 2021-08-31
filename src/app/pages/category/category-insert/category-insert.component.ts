import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InsertCategoriesReqDto } from 'src/app/models/category-dto/insert-categories-req-dto';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.css']
})
export class CategoryInsertComponent implements OnInit {

  categoryReq = new InsertCategoriesReqDto();
  constructor(private title: Title, private categoryService : CategoryService, private route : Router) { }

  ngOnInit(): void {
    this.title.setTitle('Category Insert');
  }

  onClick(): void{
    this.categoryService.insert(this.categoryReq).subscribe(res => {
      this.route.navigate(['/category-list'])
    })
  }

}
