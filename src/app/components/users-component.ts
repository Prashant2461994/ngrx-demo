import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'users',
  template: `<user-lists  fxLayout="row" fxLayoutGap="20px" [users]="this.users"></user-lists>`,
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {
    this.fetchData();
  }

  users!: User[];
  constructor(private apiService: ApiService) {}

  fetchData() {
    this.apiService.getAllPosts().subscribe((data) => {
      this.users = data;
    });
  }
}
