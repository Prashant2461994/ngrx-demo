import { UpdateUserComponent } from './../update_user.component';
import { YoutubeRepository } from './../../services/youtube-repository';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'user-card',
  template: ` <mat-card
    style="margin-bottom: 30px;"
    fxLayout="column"
    fxLayoutGap="40px"
    fxLayoutAlign="start stretch"
  >
    <mat-card-title>{{ this.user.name }}</mat-card-title>
    <mat-card-content>{{ this.user.email }}</mat-card-content>
    <button
      mat-raised-button
      color="warn"
      (click)="this.delete()"
      style="margin:10px"
    >
      DELETE
    </button>
    <button mat-raised-button color="primary" (click)="this.update()">
      UPDATE
    </button>
  </mat-card>`,

  styles: [
    `
      div {
        width: 50px;
        height: 100px;
      }
    `,
  ],
})
export class UserCardComponent {
  @Input('user') user!: User;

  constructor(
    private youtubeRepository: YoutubeRepository,
    private dialog: MatDialog
  ) {}

  delete() {
    // first call the api
    this.youtubeRepository.deleteUser(this.user.id);
  }

  update() {
    this.dialog.open(UpdateUserComponent, {
      width: '256px',
      height: '256px',
      data:this.user
    });
  }
}
