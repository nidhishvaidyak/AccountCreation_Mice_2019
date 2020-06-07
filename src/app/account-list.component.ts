import {Component,OnInit} from '@angular/core';
import {Account} from './account';
import { BankService } from './bank.service';
@Component({
    selector:'app-alist',
    templateUrl:'./account-list.component.html'
})
export class AccountListComponent
{
    p:number=1;
   accounts:Account[];
  
selectedAcc:Account;
constructor(private bks:BankService)
{

}
getDetails(acc)
{
this.selectedAcc=acc;
}
ngOnInit()
{
this.bks.getAccount().subscribe((res)=>this.accounts=res);
}
}