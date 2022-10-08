import { Action, createReducer, on } from "@ngrx/store";
import { AuthActions, AuthActionTypes } from "./auth.actions";
import { User } from "./model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined,
};

// export const authReducer = createReducer(initialAuthState);
export function authReducer(
  state = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user,
      };
    case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined,
      };
    default:
      return state;
  }
}
