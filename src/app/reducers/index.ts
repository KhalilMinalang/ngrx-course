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
import { authReducer, AuthState, initialAuthState } from "../auth/auth.reducer";
import { User } from "../auth/model/user.model";

// Global state
export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
