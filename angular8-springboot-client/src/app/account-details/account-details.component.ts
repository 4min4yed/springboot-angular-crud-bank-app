import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- 1. IMPORT OBLIGATOIRE
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  standalone: true,              // <--- 2. REND LE COMPOSANT AUTONOME
  imports: [CommonModule],       // <--- 3. AJOUTE LA BOÎTE À OUTILS (*ngIf)
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  id!: number;
  account!: Account;
  
  constructor(private route: ActivatedRoute, private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {
    this.account = new Account();
    this.id = this.route.snapshot.params['id'];
    
    this.accountService.getAccount(this.id)
      .subscribe({
        next: (data: Account) => {
          console.log(data)
          this.account = data;
        },
        error: (error: any) => console.log(error)
      });
  }

  list(){
    this.router.navigate(['accounts']);
  }
}