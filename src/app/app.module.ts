import { ApiService } from './services/api.service';
import { YoutubeLayoutComponent } from './containers/layout/youtube-layout';
import { YoutubeHeaderComponent } from './containers/layout/youtube-header';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeFooterLayout } from './containers/layout/youtube-footer';
import { PostsComponent } from './containers/post-component';
import { UsersComponent } from './containers/users-component';
import { DashboardComponent } from './containers/dashboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HttpService } from './services/https.service';
import { UserCardComponent } from './components/cards/user-card.component';
import { PostCardComponent } from './components/cards/post-card.component';
import { PostListComponent } from './components/lists/posts-list.component';
import { UserListComponent } from './components/lists/users-list.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { YoutubeRepository } from './services/youtube-repository';
import { rootReducer } from './reducers';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    YoutubeHeaderComponent,
    YoutubeLayoutComponent,
    YoutubeFooterLayout,
    PostsComponent,
    UsersComponent,
    UserCardComponent,
    PostCardComponent,
    PostListComponent,
    UserListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
  ],
  providers: [HttpService,ApiService,HttpClient,YoutubeRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }

