import { createSelector } from "@ngrx/store";

// feature selector
export const selectAuthState = (state) => state.auth;

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => auth.loggedIn
);

export const isLoggedOut = createSelector(isLoggedIn, (LoggedIn) => !LoggedIn);
