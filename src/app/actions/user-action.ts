
import { Action } from './index';

import { User } from '../models/user';

export const USER_LIST_REQUEST = 'user list request';
export const USER_LIST_SUCCESS = 'user list success';
export const USER_LIST_FAILED = 'user list failed';
export const USER_LIST_ERROR = 'user list error';
export const USER_DELETE_ACTION = 'user delete request';
export const USER_UPDATE_ACTION = 'user update';

export class UserListRequestAction implements Action {
  readonly type = USER_LIST_REQUEST;
}

export class UserListSuccessAction implements Action {
  readonly type = USER_LIST_SUCCESS;
  constructor(public payload?: { data: User[] }) {}
}

export class UserListErrorAction implements Action {
  readonly type = USER_LIST_ERROR;
}

export class UserDeleteAction implements Action {
  readonly type = USER_DELETE_ACTION;
  constructor(public payload?: { id: number }) {}
}



export class UserUpdateAction implements Action {
  readonly type = USER_UPDATE_ACTION;
  constructor(public payload?: {data:User }) {}
}
