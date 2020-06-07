import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HomeComponent} from './home.component';
import { CustomerListComponent } from './customer-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import{CustomerDetailsComponent} from './cust-details.component';

import{CustomerAddComponent} from './cust-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import{MatToolbarModule,MatCardModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatButtonModule
,MatRadioModule,MatListModule,MatSidenavModule} from '@angular/material';
import {BankService} from './bank.service';
import { ContactComponent } from './contact.component';
import { ErrorComponent } from './error.component';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import { AuthGuardService } from './authguard.service';
import{LoginComponent} from './login.component';
import {MatIconModule} from '@angular/material/icon';
import {AccountComponent} from './account.component';
 import {AccountListComponent} from './account-list.component';
import {AccountDetailsComponent} from './account-detail.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent, CustomerListComponent,
    CustomerDetailsComponent,AccountListComponent,AccountDetailsComponent,CustomerAddComponent,ErrorComponent,AccountComponent,ContactComponent,LoginComponent,
  ],
  imports: [
    BrowserModule,FormsModule, 
     NgxPaginationModule,
     BrowserAnimationsModule,ReactiveFormsModule,
    MatToolbarModule,MatIconModule,MatCardModule,MatInputModule,MatFormFieldModule,MatSelectModule,HttpClientModule,
    MatRadioModule,MatButtonModule,MatListModule,MatSidenavModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BankService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
