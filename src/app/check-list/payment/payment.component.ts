import { Component, OnInit, Input } from '@angular/core';
import { Payment } from '../../Models/Payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
@Input() payment: Payment;
  constructor() { }

  ngOnInit() {
  }

}
