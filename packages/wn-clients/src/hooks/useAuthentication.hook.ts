import { batch, useSelector } from 'react-redux';
import { useTypedDispatch } from '../redux/store';

import {
  authenticationIsAuthenticatedSelector,
  authenticationTokensSelector,
  authenticationUserSelector,
} from '../redux/slices/authentication/authentication.selector';
import {
  AUTHENTICATION_INITIAL_STATE,
  setAuthenticationTokens,
  setAuthenticationUser,
  setIsAuthenticated,
} from '../redux/slices/authentication/authentication.slice';
import {
  IAuthenticationTokens,
  ILoginPayload,
} from '../redux/slices/authentication/authentication.types';

const useAuthentication = () => {
  const user = useSelector(authenticationUserSelector);
  const tokens = useSelector(authenticationTokensSelector);
  const isAuthenticated = useSelector(authenticationIsAuthenticatedSelector);

  const dispatch = useTypedDispatch();

  const handleLogin = (payload: ILoginPayload) => {
    batch(() => {
      dispatch(setAuthenticationTokens(payload.tokens));
      dispatch(setIsAuthenticated(payload.isAuthenticated));
      dispatch(setAuthenticationUser(payload.user));
    });
  };

  const handleLogout = () => {
    batch(() => {
      dispatch(setAuthenticationUser(AUTHENTICATION_INITIAL_STATE.user));
      dispatch(
        setIsAuthenticated(AUTHENTICATION_INITIAL_STATE.isAuthenticated),
      );
      dispatch(setAuthenticationUser(AUTHENTICATION_INITIAL_STATE.user));
    });
  };

  const handleSetAuthenticationTokens = (tokens: IAuthenticationTokens) => {
    dispatch(setAuthenticationTokens(tokens));
  };

  return {
    user,
    tokens,
    isAuthenticated,
    handleLogin,
    handleLogout,
    handleSetAuthenticationTokens,
  };
};

export default useAuthentication;
