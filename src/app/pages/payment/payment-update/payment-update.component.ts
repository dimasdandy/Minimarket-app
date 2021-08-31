import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAllPathPaymentsResData } from 'src/app/models/payment-dto/find-all-path-payments-res-data';
import { UpdatePaymentsReqDto } from 'src/app/models/payment-dto/update-payments-req-dto';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-update',
  templateUrl: './payment-update.component.html',
  styleUrls: ['./payment-update.component.css']
})
export class PaymentUpdateComponent implements OnInit {

  data?: FindAllPathPaymentsResData[] = []
  payment = new UpdatePaymentsReqDto();

  constructor(private title: Title, private paymentService: PaymentService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle('Payment Update');

    this.activatedRoute.params.subscribe(res => {
      this.paymentService.getById(res.id).subscribe(res => {
        this.payment.id = res.data?.id
        this.payment.name = res.data?.name
        this.payment.code = res.data?.code
        this.payment.isActive = res.data?.isActive
        this.payment.version = res.data?.version
      })
    })
  }

  onClick() : void {
    this.paymentService.update(this.payment).subscribe(res => {
      this.route.navigate(['/payment-list'])
    })
  }

}
