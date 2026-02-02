import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-account',
  imports: [FormsModule, NgIf],
  templateUrl: './update-account.component.html',
  styleUrl: './update-account.component.scss'
})
export class UpdateAccountComponent implements OnInit {
  account: Account = new Account();
  id: number = 0;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.accountService.getAccount(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.account = data;
        },
        error => console.log(error)
      );
  }

  save() {
    console.log(this.account);
    this.accountService.updateAccount(this.id, this.account)
      .subscribe(data => {
        console.log(data);
        this.submitted = true;
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/accounts']);
  }

  newAccount(): void {
    this.submitted = false;
    this.accountService.getAccount(this.id)
      .subscribe(
        data => {
          this.account = data;
        },
        error => console.log(error)
      );
  }
}
