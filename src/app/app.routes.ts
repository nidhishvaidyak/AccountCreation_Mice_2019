import {HomeComponent} from './home.component';
import { CustomerListComponent } from './customer-list.component';
import{CustomerDetailsComponent} from './cust-details.component';

import{CustomerAddComponent} from './cust-add.component';
import { ContactComponent } from './contact.component';
import { ErrorComponent } from './error.component';
import {Routes} from '@angular/router';
import { AuthGuardService } from './authguard.service';
import { LoginComponent } from './login.component';
import {AccountComponent} from './account.component'
import {AccountDetailsComponent} from './account-detail.component';
import {AccountListComponent} from './account-list.component';

export const appRoutes:Routes=[

{path:'home',component:HomeComponent},
{path:'contact',component:ContactComponent},
{path:'list',component:CustomerListComponent//,canActivate:[AuthGuardService]
},
{path:'list/:id',component:CustomerDetailsComponent},

{path:'alist',component:AccountListComponent//,canActivate:[AuthGuardService]
},
{path:'alist/:id',component:AccountDetailsComponent},


{path:'add',component:CustomerAddComponent//,canActivate:[AuthGuardService]
},
{path:'acc',component:AccountComponent//,canActivate:[AuthGuardService]
},

{path:'login',component:LoginComponent},
{path:'logout',component:LoginComponent},

{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:ErrorComponent}


];