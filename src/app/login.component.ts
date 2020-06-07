import {Component} from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { User } from './user';
import { BankService } from './bank.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
 
    templateUrl:`./login.component.html`,
   
})
export class LoginComponent
{

returnUrl:string;
public user=new User("","");
loginForm:FormGroup;
constructor(private fb:FormBuilder,private bks:BankService,private rt:Router,private actroute:ActivatedRoute)
{
    this.loginForm=fb.group({
        uname:[],
        pwd:[]
    });
}
ngOnInit()
{
    this.bks.logout();
    this.returnUrl=this.actroute.snapshot.queryParams['returnUrl'];
}
loginCheck()
{
    let uname=this.loginForm.get('uname').value;
    let pwd=this.loginForm.get('pwd').value;
    this.bks.login(uname,pwd).subscribe(r=>{
        if(r!=null)
        {
            localStorage.setItem("user",r.toString());
         
            this.rt.navigateByUrl(this.returnUrl);
        }
    })

}

}