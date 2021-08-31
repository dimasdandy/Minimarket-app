import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllCartHdrResData } from 'src/app/models/cart-dto/find-all-cart-hdr-res-data';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private cartService: CartService, private route: Router, private title: Title) { }

  data: FindAllCartHdrResData[] = []

  ngOnInit(): void {
    this.title.setTitle('Cart List');
    this.cartService.getAllHdr().toPromise().then(res => {
      this.data = res.data!
    })
  }

  view(idHdr?: number):void{
    this.route.navigate(['/cart-detail-list/'+idHdr])
  }
}
