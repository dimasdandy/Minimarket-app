import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllPathPaymentsResData } from 'src/app/models/payment-dto/find-all-path-payments-res-data';
import { PaymentService } from 'src/app/services/payment.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class PaymentListComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private paymentService: PaymentService, private title: Title, private route: Router) { }

  data: FindAllPathPaymentsResData[] = []

  ngOnInit(): void {
    this.title.setTitle('Payment List');
    this.initData();
  }

  update(id?: number): void {
    this.route.navigate(['/payment-update/'+id])
  }

  initData(): void {
    this.paymentService.getAll().toPromise().then(res => {
      this.data = res.data!
    })
  }

  delete(id: number, event: Event): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.paymentService.delete(id).toPromise().then(res => {
          this.initData();
        })
      },
      reject: () => {

      }
    });
  }
}
