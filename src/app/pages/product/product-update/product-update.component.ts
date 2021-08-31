import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAllPathResData } from 'src/app/models/category-dto/find-all-path-res-data';
import { FindAllPathProductsResData } from 'src/app/models/products-dto/find-all-path-products-res-data';
import { UpdateProductsReqDto } from 'src/app/models/products-dto/update-products-req-dto';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  data: FindAllPathResData[] = []
  product = new UpdateProductsReqDto();
  constructor(private title: Title, private productService: ProductService, private categoryService: CategoryService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle('Product Update');

    this.categoryService.getAll().subscribe(res =>{
      this.data = res.data!})

    this.activatedRoute.params.subscribe(res => {
      this.productService.getById(res.id).subscribe(res => {
        this.product.id = res.data?.id
        this.product.name = res.data?.name
        this.product.code = res.data?.code
        this.product.price = res.data?.price
        this.product.stock = res.data?.stock
        this.product.category = res.data?.category
        this.product.isActive = res.data?.isActive
        this.product.version = res.data?.version
      })
    })
  }

  onClick() : void {
    this.productService.update(this.product).subscribe(res => {
      this.route.navigate(['/product-list'])
    })
  }

}
