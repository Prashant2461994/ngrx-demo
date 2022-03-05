import { User } from './../../models/user';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-lists',
  template: `
  <div fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="start end">
    <user-card [user]="user" *ngFor="let user of users"></user-card>
  </div>`,
})
export class UserListComponent {
  @Input('users') users!: User[];
}
