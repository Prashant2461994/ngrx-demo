import { Component } from '@angular/core';

@Component({
  selector: 'youtube-layout',
  template: `
     <youtube-header></youtube-header>
     <router-outlet></router-outlet>
     <youtube-footer></youtube-footer>`,
  styles: [],
})
export class YoutubeLayoutComponent {}
