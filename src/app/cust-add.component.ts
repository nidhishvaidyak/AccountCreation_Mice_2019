import {Component} from '@angular/core';
import {Customer} from './customer';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {CountryValidator} from './country-Validator';
import { BankService } from './bank.service';
@Component({
    selector:'app-add',
    templateUrl:'./cust-add.component.html'
})
export class CustomerAddComponent
{
    states=["Assam","Delhi","Karnataka","Goa","Kerala"];
    constructor(private fb:FormBuilder,private bks:BankService)
    {

    }
    custForm=this.fb.group({
        customerNo:['',Validators.required],
        firstName:['',[Validators.required,Validators.minLength(3)]],
        lastName:[],
        state:['Karnataka'],
        country:['India',CountryValidator.noSapce],
        gender:[]

   });
  insert()
  {
     // console.log(this.custForm.value);
this.bks.addCustomer(this.custForm.value).subscribe((res)=>{if(res){
alert('Added the customer entry & Saved');
}
else{
    alert("Error.... Either your account do not EXITS Or you already have a account Plss CHEck------")
}})

  }
}