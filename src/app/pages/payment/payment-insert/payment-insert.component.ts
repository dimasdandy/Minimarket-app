import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InsertPaymentsReqDto } from 'src/app/models/payment-dto/insert-payments-req-dto';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-insert',
  templateUrl: './payment-insert.component.html',
  styleUrls: ['./payment-insert.component.css']
})
export class PaymentInsertComponent implements OnInit {

  paymentReq = new InsertPaymentsReqDto();

  constructor(private title: Title, private route : Router, private paymentService : PaymentService ) { }

  ngOnInit(): void {
    this.title.setTitle('Payment Insert');
  }

  onClick(): void{
    this.paymentService.insert(this.paymentReq).subscribe(res => {
      this.route.navigate(['/payment-list'])
    })
  }
}
