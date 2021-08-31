import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constant/general-constant';
import { DeleteMembersResDto } from '../models/member-dto/delete-members-res-dto';
import { FindAllPathMembersRes } from '../models/member-dto/find-all-path-members-res';
import { FindByIdMembersPathRes } from '../models/member-dto/find-by-id-members-path-res';
import { InsertMembersReqDto } from '../models/member-dto/insert-members-req-dto';
import { InsertMembersResDto } from '../models/member-dto/insert-members-res-dto';
import { UpdateMembersReqDto } from '../models/member-dto/update-members-req-dto';
import { UpdateMembersResDto } from '../models/member-dto/update-members-res-dto';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<FindAllPathMembersRes> {
    return this.http.get(`${BASE_URL}/members`);
  }

  getById(id: number): Observable<FindByIdMembersPathRes> {
    return this.http.get(`${BASE_URL}/members/` + id);
  }

  insert(body: InsertMembersReqDto): Observable<InsertMembersResDto> {
    return this.http.post(`${BASE_URL}/members`, body);
  }

  update(body: UpdateMembersReqDto): Observable<UpdateMembersResDto> {
    return this.http.put(`${BASE_URL}/members`, body);
  }

  delete(id: number): Observable<DeleteMembersResDto> {
    return this.http.delete(`${BASE_URL}/members/` + id);
  }
}
