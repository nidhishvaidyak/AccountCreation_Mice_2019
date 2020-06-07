import {Injectable} from '@angular/core';
import {CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { BankService } from './bank.service';
@Injectable()
export class AuthGuardService implements CanActivate
{
constructor(private rt:Router,private bks:BankService)
{

}
    canActivate(act:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
    {
      /*   const reDirectUrl=act['_routerState']['url'];
        alert(reDirectUrl); */
        if(this.bks.isLogged())
        {
            return true;
        }
        else{
            alert("You are not allowed");
            this.rt.navigate(['login'],{queryParams:{returnUrl:state.url}});
    return false;
        }
        
    }
}