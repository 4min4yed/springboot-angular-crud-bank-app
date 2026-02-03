import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AccountService } from "../account.service";
import { Account } from "../account"; 
import { Router, RouterLink } from '@angular/router'; // <--- 1. Import nécessaire pour les boutons
import { CommonModule } from '@angular/common';       // <--- 2. Import nécessaire pour | async

@Component({
  selector: "app-account-list",
  // ---------------------------------------------------------
  // CES 2 LIGNES SONT OBLIGATOIRES EN ANGULAR 17+
  standalone: true, 
  imports: [CommonModule, RouterLink], 
  // ---------------------------------------------------------
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"]
})
export class AccountListComponent implements OnInit {
  accounts!: Observable<Account[]>; // Le '!' corrige l'erreur d'initialisation

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accounts = this.accountService.getAccountsList();
  }

  deleteAccount(id: number) {
    this.accountService.deleteAccount(id)
      .subscribe({
        next: data => {
          console.log(data);
          this.reloadData();
        },
        error: error => console.log(error)
      });
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