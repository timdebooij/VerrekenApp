import { Component } from '@angular/core';
import { Payment } from './Models/Payment';
import { Person } from './Models/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VerrekenApp';
  payments: Array<Payment> = new Array<Payment>();
  persons: Array<Person> = new Array<Person>();
  total: number = 0;


  newPayment(item: Payment){
    this.payments.push(item);
    this.addPerson(item.person);
    this.total = this.total + item.amount;
  }

  addPerson(person: Person): boolean{
    for(let i = 0; i< this.persons.length; i++){
      if(person.name === this.persons[i].name){
        this.persons[i].total = this.persons[i].total + person.total;
        return true;
      }
    }
    this.persons.push(person);
    return false;
  }

  refresh(str: string){
    this.payments = new Array<Payment>();
    this.persons = new Array<Person>();
    this.total = 0;
  }
}
