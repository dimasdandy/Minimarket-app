import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constant/general-constant';
import { DeleteCategoriesResDto } from '../models/category-dto/delete-categories-res-dto';
import { FindAllPathRes } from '../models/category-dto/find-all-path-res';
import { FindByIdCategoriesPathRes } from '../models/category-dto/find-by-id-categories-path-res';
import { InsertCategoriesReqDto } from '../models/category-dto/insert-categories-req-dto';
import { InsertCategoriesResDto } from '../models/category-dto/insert-categories-res-dto';
import { UpdateCategoriesReqDto } from '../models/category-dto/update-categories-req-dto';
import { UpdateCategoriesResDto } from '../models/category-dto/update-categories-res-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<FindAllPathRes> {
    return this.http.get(`${BASE_URL}/categories`);
  }

  getById(id: number): Observable<FindByIdCategoriesPathRes> {
    return this.http.get(`${BASE_URL}/categories/` + id);
  }

  insert(body: InsertCategoriesReqDto): Observable<InsertCategoriesResDto> {
    return this.http.post(`${BASE_URL}/categories`, body);
  }

  update(body: UpdateCategoriesReqDto): Observable<UpdateCategoriesResDto> {
    return this.http.put(`${BASE_URL}/categories`, body);
  }

  delete(id: number): Observable<DeleteCategoriesResDto> {
    return this.http.delete(`${BASE_URL}/categories/` + id);
  }
}
