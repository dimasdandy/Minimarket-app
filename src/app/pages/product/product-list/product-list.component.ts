import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllPathProductsResData } from 'src/app/models/products-dto/find-all-path-products-res-data';
import { InsertProductsReqDto } from 'src/app/models/products-dto/insert-products-req-dto';
import { ProductService } from 'src/app/services/product.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ProductListComponent implements OnInit {

  productReq = new InsertProductsReqDto();

  constructor(private productService: ProductService, private title: Title, private route : Router,
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  data: FindAllPathProductsResData[] = []

  ngOnInit(): void {
    this.title.setTitle('Product List');
    this.initData();
  }

  update(id?: number): void {
    this.route.navigate(['/product-update/'+id])
  }

  initData(): void {
    this.productService.getAll().toPromise().then(res => {
      this.data = res.data!
    })
  }

  delete(id: number, event: Event): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.delete(id).toPromise().then(res => {
          this.initData();
        })
      },
      reject: () => {

      }
    });
  }
  

}
