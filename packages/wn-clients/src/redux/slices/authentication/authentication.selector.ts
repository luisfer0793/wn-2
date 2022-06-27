import { RootState } from '../../store';

export const authenticationTokensSelector = (state: RootState) =>
  state.authentication.tokens;

export const authenticationIsAuthenticatedSelector = (state: RootState) =>
  state.authentication.isAuthenticated;

export const authenticationUserSelector = (state: RootState) =>
  state.authentication.user;
