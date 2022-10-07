import { Actions } from "@ngrx/effects";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { AuthActionTypes } from "../auth/auth.actions";
import { User } from "../auth/model/user.model";

type AuthState = {
  loggedIn: boolean;
  user: User;
};

const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined,
};

// Global state
export interface AppState {
  auth: AuthState;
  // courses: CoursesState,
  // lessons: LessonsState,
}

function authReducer(state: AuthState = initialAuthState, action): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user,
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
