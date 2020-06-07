import {Component} from '@angular/core';
import {Account} from './account';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {CountryValidator} from './country-Validator';
import { BankService } from './bank.service';
import{Customer} from './customer';
@Component({
    
    templateUrl:'./account.component.html'
})
export class AccountComponent
{
    customers:Customer[];

    constructor(private fb:FormBuilder,private bks:BankService)
    {

    }
    accForm=this.fb.group({
        customerNo:['',Validators.required],
        accid:['',[Validators.required,Validators.minLength(3)]],
        acctype:[],
        balance:[10000],
        
        opdate:[]

   });
   ngOnInit()
   {
   this.bks.getCustomers().subscribe((res)=>this.customers=res);
  
   }
  insert()
  {
    console.log(this.accForm.value);
this.bks.addAccount(this.accForm.value).subscribe((data)=>{if(data){
alert('Saved the account ');
}
else{
    alert("Error.... Either your account do not EXITS Or you already have a account Plss CHEck------")
}})

  }
}