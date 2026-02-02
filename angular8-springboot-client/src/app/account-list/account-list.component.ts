import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AccountService } from "../account.service";
import { Account } from "../account"; 
import { Router } from '@angular/router';


@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"]
})
export class AccountListComponent implements OnInit {
  accounts: Observable<Account[]> = new Observable();

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accounts = this.accountService.getAccountsList();
  }

  deleteAccount(id: number) {
    this.accountService.deleteAccount(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  accountDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateAccount(id: number){
    this.router.navigate(['update', id]);
  }

  createAccount() {
    this.router.navigate(['/create']);
  }
}