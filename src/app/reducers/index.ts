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

// Global state
export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
