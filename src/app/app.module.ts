import { YoutubeLayoutComponent } from './containers/layout/youtube-layout';
import { YoutubeHeaderComponent } from './containers/layout/youtube-header';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeFooterLayout } from './containers/layout/youtube-footer';
import { PostsComponent } from './components/post-component';
import { UsersComponent } from './components/users-component';
import { DashboardComponent } from './containers/dashboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    YoutubeHeaderComponent,
    YoutubeLayoutComponent,
    YoutubeFooterLayout,
    PostsComponent,
    UsersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
