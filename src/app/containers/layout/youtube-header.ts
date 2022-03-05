import { Component } from '@angular/core';

@Component({
  selector: 'youtube-header',
  template: `<mat-toolbar>
    <div
      fxLayoutAlign="start center"
      fxFlex="100%"
      style="height:85px padding: 0 16px;"
      fxHide.xs
    >
      <button
        mat-button
        routerLink=""
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="selected"
        mat-button
      >
        Users
      </button>
      <button
        mat-button
        routerLink="/posts"
        routerLinkActive="selected"
        [routerLinkActiveOptions]="{ exact: true }"
        mat-button
      >
        Posts
      </button>
    </div>
  </mat-toolbar>`,
  styles: [
    `
      .selected {
        background: #a5a07d;
      }
    `,
  ],
})
export class YoutubeHeaderComponent {}
