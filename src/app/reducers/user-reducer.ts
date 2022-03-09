import {
  USER_DELETE_ACTION,
  USER_LIST_ERROR,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_UPDATE_ACTION,
} from './../actions/user-action';
import { Action } from './../actions/index';
import { User } from '../models/user';

export interface UserReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  users: User[];
}

const initialState: UserReducerState = {
  loaded: false,
  loading: false,
  error: false,
  users: [],
};

export function UserReducer(
  state = initialState,// Contains initial state data
  action: Action // Contains data with updated values
): UserReducerState {
  switch (action.type) {
    case USER_LIST_REQUEST: {
      return { ...state, loading: true };
    }

    case USER_LIST_SUCCESS: {
      const updatedUsers = state.users.concat(action.payload.data);
      return {
        ...state,
        loading: false,
        loaded: true,
        users: updatedUsers,
        error: false,
      };
    }

    case USER_DELETE_ACTION: {
      const users = state.users.filter((data) => data.id !== action.payload.id);
      return { ...state, ...{ users } };
    }

    case USER_UPDATE_ACTION: {
      const users = state.users.filter((data) => data.id !== action.payload.data.id);
      const updatedUser = users.concat(action.payload.data);
      return { ...state, ...{ users: updatedUser } };
    }

    case USER_LIST_ERROR: {
      return { ...state, error: true, loading: false };
    }

    default: {
      return state;
    }
  }
}
//selectors
export const getLoading = (state: UserReducerState) => state?.loading;
export const getLoaded = (state: UserReducerState) => state?.loaded;
export const getUsers = (state: UserReducerState) => state?.users;
export const getUserListError = (state: UserReducerState) => state?.error;
