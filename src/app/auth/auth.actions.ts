import {
  Action,
  // createAction,
  // props
} from "@ngrx/store";

// export const loadAuths = createAction(
//   '[Auth] Load Auths'
// );

export enum AuthActionTypes {
  LoginAction = "[Login] Action",
  LogoutAction = "[Logout] Action",
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
}

export type AuthActions = Login;
