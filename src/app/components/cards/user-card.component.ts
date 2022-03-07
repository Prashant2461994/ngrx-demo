import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user-card',
  template: `
   <mat-card style="margin-bottom: 30px;" fxLayout="column" fxLayoutGap="30px" fxLayoutAlign="start stretch">
      <mat-card-title>{{this.user.name}}</mat-card-title>
      <mat-card-content>{{this.user.email}}</mat-card-content>
    </mat-card>`,

    styles:[
      `div{
       width:50px;
       height:100px
      }`
    ]
})
export class UserCardComponent {
  @Input('user') user!: User;
}
