import {Injectable} from '@angular/core';
import {Customer} from './customer';
import {Account} from './account';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
Injectable()
export class BankService
{
private pUrl="http://localhost";
constructor(private http:HttpClient){

}
getCustomers():Observable<Customer[]>
{
    return this.http.get<Customer[]>(this.pUrl+'/nidhidsp.php');
}
addCustomer(cust:Customer)
{
    return this.http.post(this.pUrl+'/nidhiinsert.php',JSON.stringify(cust));
}
updateCustomer(cust:Customer)
{
    return this.http.post(this.pUrl+'/nidhiupdate.php/'+cust.customerNo,JSON.stringify(cust));
}

addAccount(acc:Account)
{
    return this.http.post(this.pUrl+'/acc.php',JSON.stringify(acc));
}

getAccount():Observable<Account[]>
{
         return this.http.get<Account[]>(this.pUrl+'/accdsp.php');
 }
updateAccount(acc:Account)
{
    return this.http.post(this.pUrl+'/accupdate.php/'+acc.customerNo,JSON.stringify(acc));
}


login(uname,pwd):Observable<User[]>
{
    return this.http.get<User[]>(`${this.pUrl}/getuser.php?uname=${uname}&pwd=${pwd}`);
}
isLogged()
{
    return localStorage.getItem("user")!=null && Object.keys(localStorage.getItem("user")).length>0;
}
logout()
{
    localStorage.clear();
    localStorage.removeItem("user");
    
}
}