import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constant/general-constant';
import { DeleteProductsResDto } from '../models/products-dto/delete-products-res-dto';
import { FindAllPathProductsRes } from '../models/products-dto/find-all-path-products-res';
import { FindByIdPathProductsRes } from '../models/products-dto/find-by-id-path-products-res';
import { InsertProductsReqDto } from '../models/products-dto/insert-products-req-dto';
import { InsertProductsResDto } from '../models/products-dto/insert-products-res-dto';
import { UpdateProductsReqDto } from '../models/products-dto/update-products-req-dto';
import { UpdateProductsResDto } from '../models/products-dto/update-products-res-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<FindAllPathProductsRes> {
    return this.http.get(`${BASE_URL}/products`);
  }

  getById(id:number): Observable<FindByIdPathProductsRes>{
    return this.http.get(`${BASE_URL}/products/`+id);
  }

  insert(body:InsertProductsReqDto): Observable<InsertProductsResDto>{
    return this.http.post(`${BASE_URL}/products`, body);
  }

  update(body:UpdateProductsReqDto): Observable<UpdateProductsResDto>{
    return this.http.put(`${BASE_URL}/products`, body);
  }

  delete(id:number): Observable<DeleteProductsResDto> {
    return this.http.delete(`${BASE_URL}/products/`+id);
  }
}
