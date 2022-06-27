import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IAuthenticationTokens,
  IAuthenticationUser,
} from './authentication.types';

export const AUTHENTICATION_INITIAL_STATE = {
  isAuthenticated: false,
  tokens: {
    access: '',
    refresh: '',
  },
  user: {
    id: '',
    name: '',
    email: '',
    lastName: '',
    image: '',
    role: '',
  },
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: AUTHENTICATION_INITIAL_STATE,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAuthenticationTokens: (
      state,
      action: PayloadAction<IAuthenticationTokens>,
    ) => {
      state.tokens = action.payload;
    },
    setAuthenticationUser: (
      state,
      action: PayloadAction<IAuthenticationUser>,
    ) => {
      state.user = action.payload;
    },
  },
});

export const {
  setIsAuthenticated,
  setAuthenticationUser,
  setAuthenticationTokens,
} = authenticationSlice.actions;
export const AuthenticationReducer = authenticationSlice.reducer;
