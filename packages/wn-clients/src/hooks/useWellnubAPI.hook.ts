import { useEffect } from 'react';
import { wellnub } from 'network/wellnub.api';
import useRefreshToken from './useRefreshToken.hook';
import useAuthentication from './useAuthentication.hook';

const useWellnubAPI = () => {
  const { refreshToken } = useRefreshToken();
  const { tokens } = useAuthentication();

  useEffect(() => {
    const requestInterceptor = wellnub.interceptors.request.use(
      config => {
        if (!config?.headers?.Authorization) {
          Object.defineProperty(config, 'headers', {
            value: {
              Authorization: `Bearer ${tokens.access}`,
            },
          });
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    const responseInterceptor = wellnub.interceptors.response.use(
      response => response,
      async error => {
        const previousRequest = error?.config;
        if (
          error?.response?.data?.code === 401 &&
          error?.response?.data?.message === 'jwt expired' &&
          !previousRequest?.sent
        ) {
          previousRequest.sent = true;
          const accessToken = await refreshToken();
          previousRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return wellnub(previousRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      wellnub.interceptors.request.eject(requestInterceptor);
      wellnub.interceptors.response.eject(responseInterceptor);
    };
  }, [refreshToken, tokens]);

  return wellnub;
};

export default useWellnubAPI;
