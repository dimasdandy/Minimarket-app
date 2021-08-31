import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllPathResData } from 'src/app/models/category-dto/find-all-path-res-data';
import { InsertProductsReqDto } from 'src/app/models/products-dto/insert-products-req-dto';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {

  productReq = new InsertProductsReqDto();

  constructor(private title: Title, private productService: ProductService, private categoryService: CategoryService, private route: Router) { }

  data: FindAllPathResData[] = []

  ngOnInit(): void {
    this.title.setTitle('Product Insert');
    this.categoryService.getAll().subscribe(res => {
      this.data = res.data!
    })
  }

  onClick(): void {
    this.productService.insert(this.productReq).subscribe(res => {
      this.route.navigate(['/product-list'])
    })
  }

}
