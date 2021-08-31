import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InsertCartReqDto } from 'src/app/models/cart-dto/insert-cart-req-dto';
import { InsertCartReqDtoDetail } from 'src/app/models/cart-dto/insert-cart-req-dto-detail';
import { InsertCartReqDtoHeader } from 'src/app/models/cart-dto/insert-cart-req-dto-header';
import { ProductModel } from 'src/app/models/cart-dto/product-model';
import { FindAllPathMembersResData } from 'src/app/models/member-dto/find-all-path-members-res-data';
import { FindAllPathPaymentsResData } from 'src/app/models/payment-dto/find-all-path-payments-res-data';
import { FindAllPathProductsResData } from 'src/app/models/products-dto/find-all-path-products-res-data';
import { FindAllPathUsersResData } from 'src/app/models/user-dto/find-all-path-users-res-data';
import { CartService } from 'src/app/services/cart.service';
import { MemberService } from 'src/app/services/member.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart-insert',
  templateUrl: './cart-insert.component.html',
  styleUrls: ['./cart-insert.component.css']
})
export class CartInsertComponent implements OnInit {

  isPaymentCash = true;
  cartReq = new InsertCartReqDto();
  cartHdrReq = new InsertCartReqDtoHeader();
  cartDtlReq = new InsertCartReqDtoDetail();
  dataUser: FindAllPathUsersResData[] = []
  dataMember: FindAllPathMembersResData[] = []
  dataPayment: FindAllPathPaymentsResData[] = []
  dataProduct: FindAllPathProductsResData[] = []
  productList: ProductModel[] = []
  productModel = new ProductModel();

  constructor(private cartService: CartService, private route: Router,
    private title: Title, private userService: UserService, private memberService: MemberService,
    private paymentService: PaymentService, private productService: ProductService) { }

  ngOnInit(): void {
    this.title.setTitle('Cart Insert');
    this.users()
    this.members()
    this.payments()
    this.products()
  }

  // selectInput(event:any) : void{
  //   let selected = event.target.value;
  //   if (this.paymentService.getById.name == "Tunai"){
  //     this.isPaymentCash =true;
  //   } else {
  //     this.isPaymentCash =false;
  //   }
  // }

  users(): void {
    this.userService.getAll().toPromise().then(res => {
      this.dataUser = res.data!
    })
  }

  members(): void {
    this.memberService.getAll().toPromise().then(res => {
      this.dataMember = res.data!
    })
  }

  payments(): void {
    this.paymentService.getAll().toPromise().then(res => {
      this.dataPayment = res.data!
    })
  }

  products(): void {
    this.productService.getAll().toPromise().then(res => {
      this.dataProduct = res.data!
    })
  }

  productChange(data: any): void {
    this.productModel = new ProductModel();
    this.productService.getById(data.value).subscribe(res => {
      this.productModel.id = data.value
      this.productModel.name = res.data?.name
      this.productModel.quantity = this.cartDtlReq.quantity
    })
  }

  onSave(): void {
    this.productList.push(this.productModel)
  }

  onClick(): void {
    this.cartReq.details = []
    for (let i = 0; i < this.productList.length; i++) {
      let cartDtl = new InsertCartReqDtoDetail()
      cartDtl.product = this.productList[i].id
      cartDtl.quantity = this.productList[i].quantity
      this.cartReq.details?.push(cartDtl);

    }
    this.cartService.insert(this.cartReq).subscribe(res => {
      this.route.navigate(['/cart-list'])
    })
  }
}
