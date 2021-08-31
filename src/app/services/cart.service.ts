import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constant/general-constant';
import { FindAllCartDtlRes } from '../models/cart-dto/find-all-cart-dtl-res';
import { FindAllCartHdrRes } from '../models/cart-dto/find-all-cart-hdr-res';
import { InsertCartReqDto } from '../models/cart-dto/insert-cart-req-dto';
import { InsertCartResDto } from '../models/cart-dto/insert-cart-res-dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllHdr(): Observable<FindAllCartHdrRes> {
    return this.http.get(`${BASE_URL}/carts`);
  }

  getAllDtl(idHdr?: number): Observable<FindAllCartDtlRes> {
    return this.http.get(`${BASE_URL}/carts/dtl/${idHdr}`);
  }

  insert(body: InsertCartReqDto): Observable<InsertCartResDto> {
    return this.http.post(`${BASE_URL}/carts`, body);
  }
}
