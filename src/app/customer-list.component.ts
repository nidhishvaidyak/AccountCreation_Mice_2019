import {Component,OnInit} from '@angular/core';
import {Customer} from './customer';
import { BankService } from './bank.service';
@Component({
    selector:'app-list',
    templateUrl:'./customer-list.component.html'
})
export class CustomerListComponent
{
    p:number=1;
   customers:Customer[];
  
selectedCust:Customer;
constructor(private bks:BankService)
{

}
getDetails(cust)
{
this.selectedCust=cust;
}
ngOnInit()
{
this.bks.getCustomers().subscribe((res)=>this.customers=res);
}
}