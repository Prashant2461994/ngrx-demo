import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user-card',
  template: `<mat-card style="margin:10px; max-width:170px">
    <mat-card-title>{{ this.user.name }}</mat-card-title>
    <mat-card-subtitle>{{ this.user.email }}</mat-card-subtitle>
    <mat-card-content>
      <p>
        {{ this.user.address.street}}
      </p>
    </mat-card-content>
  </mat-card>`,
})
export class UserCardComponent {
  @Input('user') user!: User;
}
