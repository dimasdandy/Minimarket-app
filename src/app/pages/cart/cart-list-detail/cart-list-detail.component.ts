import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FindAllCartDtlResData } from 'src/app/models/cart-dto/find-all-cart-dtl-res-data';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list-detail',
  templateUrl: './cart-list-detail.component.html',
  styleUrls: ['./cart-list-detail.component.css']
})
export class CartListDetailComponent implements OnInit {

  constructor(private cartService: CartService,
    private activatedRoute: ActivatedRoute, private title: Title) { }

  data: FindAllCartDtlResData[] = []

  ngOnInit(): void {
    this.title.setTitle("Cart List Detail")
    this.activatedRoute.params.subscribe(res => {
      this.cartService.getAllDtl(res.idHdr).subscribe(res => {
        this.data = res.data!
      })
    })
  }

}
