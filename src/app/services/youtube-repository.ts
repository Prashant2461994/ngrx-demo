import { ApiService } from './api.service';
import {
  UserListRequestAction,
  UserListSuccessAction,
} from './../actions/user-action';
import { getUserLoaded, getUserLoading, getUsers } from './../reducers/index';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootReducerState } from '../reducers';
import { combineLatest, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class YoutubeRepository {
  constructor(
    private store: Store<RootReducerState>,
    private apiService: ApiService
  ) {}

  getUserList(force = false): [Observable<boolean>, Observable<User[]>] {

    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const getUserData: Observable<User[]> = this.store.select(getUsers);

    combineLatest([loaded$, loading$]).subscribe((data) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new UserListRequestAction());
        this.apiService.getAllPosts().subscribe((res) => {
          this.store.dispatch(new UserListSuccessAction({ data: res }));
        });
      }
    });

    return [loaded$, getUserData];
  }
}
