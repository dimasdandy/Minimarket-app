import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FindAllPathRolesRes } from '../models/role-dto/find-all-path-roles-res';
import { BASE_URL } from '../constant/general-constant';
import { UpdateDataResDto } from '../models/role-dto/update-data-res-dto-data';
import { UpdateDataReqDto } from '../models/role-dto/update-data-req-dto';
import { InsertDataReqDto } from '../models/role-dto/insert-data-req-dto';
import { InsertDataResDto } from '../models/role-dto/insert-data-res-dto';
import { FindByIdPathRes } from '../models/role-dto/find-by-id-path-res';
import { DeleteDataResDto } from '../models/role-dto/delete-data-res-dto';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<FindAllPathRolesRes> {
    return this.http.get(`${BASE_URL}/roles`);
  }

  getById(id:number): Observable<FindByIdPathRes>{
    return this.http.get(`${BASE_URL}/roles/`+id);
  }

  insert(body:InsertDataReqDto): Observable<InsertDataResDto>{
    return this.http.post(`${BASE_URL}/roles`, body);
  }

  update(body:UpdateDataReqDto): Observable<UpdateDataResDto>{
    return this.http.put(`${BASE_URL}/roles`, body);
  }

  delete(id:number): Observable<DeleteDataResDto> {
    return this.http.delete(`${BASE_URL}/roles/`+id);
  }
}
