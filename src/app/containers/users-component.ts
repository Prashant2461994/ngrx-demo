import { combineLatest } from 'rxjs';
import { YoutubeRepository } from '../services/youtube-repository';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'users',
  template: ` <div
    fxLayout="column"
    fxLayoutAlign="start center"
    fxLayoutGap="30px"
  >
    <user-lists
      *ngIf="!this.loading && !this.error"
      this.loading
      [users]="this.users"
    ></user-lists>
    <mat-spinner *ngIf="this.loading"></mat-spinner>
    <app-error *ngIf="this.error && !this.loading" (reload)="this.tryAgain()"></app-error>
  </div>`,
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {
    this.fetchData();
  }

  loading: boolean = false;
  error: boolean = false;
  users: User[] = [];
  constructor(private youtubeRepo: YoutubeRepository) {}

  fetchData() {
    const observers$ = this.youtubeRepo.getUserList();
    const loading$ = observers$[0];
    const userData$ = observers$[1];
    const error$ = observers$[2];

    combineLatest([loading$, userData$, error$]).subscribe((data) => {
      this.loading = data[0];
      this.users = data[1];
      this.error = data[2];
    });
  }

  tryAgain() {
    this.youtubeRepo.getUserList(true);
  }
}
