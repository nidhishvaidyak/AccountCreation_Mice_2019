import {Injectable} from '@angular/core';
@Injectable()
export class MathService
{
    public getTotal(n1:number,n2:number):number
    {
        return n1+n2;
    }
    public getProduct(n1:number,n2:number):number
    {
        return n1*n2;
    }
}