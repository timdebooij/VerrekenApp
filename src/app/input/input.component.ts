import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Payment } from '../Models/Payment';
import { Person } from '../Models/Person';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  nameStr: string = "";
  money: string = "";
  @Output() newPayment = new EventEmitter<Payment>();
  @Output() refreshEmit = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  nameValid(): boolean{
    
    if(this.nameStr.length < 3){
      return true;
    }
    else{
      return false;
    }
  }

  checkNumber(): boolean{
    if(isNaN(+this.money) || (this.countDecimals(Number(this.money)) !== 2 && this.money.split('.')[1] !== '00')){
      return true;
    }
    else{
      return false;
    }
  }

  countDecimals(value: number) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}

refresh(){
this.refreshEmit.emit("refresh");
}

addClicked(){
  var payment: Payment = new Payment();
  var person: Person = new Person();
  person.name = this.nameStr;
  person.total = Number(this.money);
  payment.person = person;
  payment.amount = Number(this.money);
  
  this.newPayment.emit(payment);
}

}
