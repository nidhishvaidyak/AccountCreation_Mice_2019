import {Component,Input} from '@angular/core';
import {Account} from './account';
import { BankService } from './bank.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
    selector:'app-adetails',
    templateUrl:'./account-detail.component.html'
})
export class AccountDetailsComponent
{
    @Input()
    det:Account;
    sub;
    id;
constructor(private bks:BankService,private act:ActivatedRoute,private router:Router){

}
back()
{
    this.router.navigate(['alist']);
}
ngOnInit()
{
this.sub=this.act.params.subscribe(params=>{this.id=params['id'];
this.bks.getAccount().subscribe(res=>this.det=res.find(b=>b.customerNo==this.id))
});
}
ngOnDestroy()
{
    this.sub.unsubscribe();
}
    save()
    {
        this.bks.updateAccount(this.det).subscribe((data)=>{if(data){
            alert('Saved & updated the detail ');
            }
            else{
                alert("Error.... Either your account do not EXITS Or you already have a account & ONE CUSTOMER CAN HAVE ONE ACCOUNT ")
            }})
            
    
    }

}