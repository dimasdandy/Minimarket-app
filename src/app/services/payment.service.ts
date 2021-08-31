import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constant/general-constant';
import { DeletePaymentsReqDto } from '../models/payment-dto/delete-payments-res-dto';
import { FindAllPathPaymentsRes } from '../models/payment-dto/find-all-path-payments-res';
import { FindByIdPathPaymentsRes } from '../models/payment-dto/find-by-id-path-payments-res';
import { InsertPaymentsReqDto } from '../models/payment-dto/insert-payments-req-dto';
import { InsertPaymentsResDto } from '../models/payment-dto/insert-payments-res-dto';
import { UpdatePaymentsReqDto } from '../models/payment-dto/update-payments-req-dto';
import { UpdatePaymentsResDto } from '../models/payment-dto/update-payments-res-dto';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<FindAllPathPaymentsRes>{
    return this.http.get(`${BASE_URL}/payments`);
  }

  getById(id:number): Observable<FindByIdPathPaymentsRes> {
    return this.http.get(`${BASE_URL}/payments/`+id);
  }

  insert(body:InsertPaymentsReqDto) : Observable<InsertPaymentsResDto>{
    return this.http.post(`${BASE_URL}/payments`,body);
  }

  update(body: UpdatePaymentsReqDto) : Observable<UpdatePaymentsResDto>{
    return this.http.put(`${BASE_URL}/payments`,body);
  }

  delete(id:number): Observable<DeletePaymentsReqDto>{
    return this.http.delete(`${BASE_URL}/payments/`+id);
  } 
}
