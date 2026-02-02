import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountListComponent } from './account-list/account-list.component';
import { UpdateAccountComponent } from './update-account/update-account.component';

@NgModule({
  declarations: [
    
    
  
   
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CreateAccountComponent,
    AccountDetailsComponent,
    AccountListComponent,
    UpdateAccountComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }