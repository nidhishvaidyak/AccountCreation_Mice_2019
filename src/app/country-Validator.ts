import {FormControl} from '@angular/forms';
export class CountryValidator
{
    static noSapce(c:FormControl)
    {
        let vl=c.value;
        return vl.indexOf(' ')>=0?{'sp':true}:null;
    }
}