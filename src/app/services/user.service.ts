import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResDto } from "../models/login-dto/login-res-dto";
import { FindAllPathUsersRes } from '../models/user-dto/find-all-path-users-res';
import { BASE_URL } from '../constant/general-constant';
import { InsertUserReqDto } from '../models/user-dto/insert-user-req-dto';
import { InsertUserResDto } from '../models/user-dto/insert-user-res-dto';
import { LoginReqDto } from '../models/login-dto/login-req-dto';
import { UpdateUserReqDto } from '../models/user-dto/update-user-req-dto';
import { UpdateUserResDto } from '../models/user-dto/update-user-res-dto-';
import { DeleteUserResDto } from '../models/user-dto/delete-user-res-dto';
import { FindByIdUsersPathResData } from '../models/user-dto/find-by-id-users-path-res-data';
import { FindByIdUsersPathRes } from '../models/user-dto/find-by-id-users-path-res';
import { UserModule } from '../pages/user/user.module';

@Injectable({
  providedIn: 'root', 
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(body: LoginReqDto): Observable<LoginResDto> {
    return this.http.post(`${BASE_URL}/api/login`, body);
  }

  getAll(): Observable<FindAllPathUsersRes> {
    return this.http.get(`${BASE_URL}/users`);
  }

  getById(id: number): Observable<FindByIdUsersPathRes> {
    return this.http.get(`${BASE_URL}/users/` + id);
  }

  insert(body: InsertUserReqDto): Observable<InsertUserResDto> {
    return this.http.post(`${BASE_URL}/users`, body);
  }

  update(body: UpdateUserReqDto): Observable<UpdateUserResDto> {
    return this.http.put(`${BASE_URL}/users`, body);
  }

  delete(id: number): Observable<DeleteUserResDto> {
    return this.http.delete(`${BASE_URL}/users/` + id);
  }
}
