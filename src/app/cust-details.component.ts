import {Component,Input} from '@angular/core';
import {Customer} from './customer';
import { BankService } from './bank.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
    selector:'app-details',
    templateUrl:'./cust-details.component.html'
})
export class CustomerDetailsComponent
{
    @Input()
    det:Customer;
    sub;
    id;
constructor(private bks:BankService,private act:ActivatedRoute,private router:Router){

}
back()
{
    this.router.navigate(['list']);
}
ngOnInit()
{
this.sub=this.act.params.subscribe(params=>{this.id=params['id'];
this.bks.getCustomers().subscribe(res=>this.det=res.find(b=>b.customerNo==this.id))
});
}
ngOnDestroy()
{
    this.sub.unsubscribe();
}
    save()
    {
        this.bks.updateCustomer(this.det).subscribe((res)=>{if(res){
            alert('SAved & Updated the detail');
            }
            else{
                alert("Error.... Either your account do not EXITS Or you already have a account Plss CHEck------")
            }})
            
    
    }

}