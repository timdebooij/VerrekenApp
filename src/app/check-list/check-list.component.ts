import { Component, OnInit, Input } from '@angular/core';
import { Payment } from '../Models/Payment';
import { Person } from '../Models/Person';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
@Input() list: Array<Payment>;
@Input() total: number= 0;
  constructor() { }

  ngOnInit() {
  }

}
