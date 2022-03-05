import { Component } from '@angular/core';

@Component({
  selector: 'youtube-layout',
  template: `
    <div>
      <youtube-header></youtube-header>
      <router-outlet></router-outlet>
      <youtube-footer></youtube-footer>
    </div>
  `,
  styles: [],
})
export class YoutubeLayoutComponent {}
