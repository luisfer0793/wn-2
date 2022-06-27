import { useAuthentication, useNotification, useWellnubAPI } from 'hooks';
import { useMutation } from 'react-query';

interface AuthenticationServicePayload {
  email: string;
  password: string;
}

export const useAuthenticationService = () => {
  const wellnub = useWellnubAPI();
  const { handleLogin } = useAuthentication();
  const handleNotification = useNotification();

  const request = async (payload: AuthenticationServicePayload) => {
    const { data } = await wellnub.post('/v1/auth/login?role=client', payload);
    return data;
  };

  return useMutation(request, {
    onSuccess: data => {
      const { token, user } = data;
      handleLogin({
        isAuthenticated: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          lastName: user.lastName,
          role: user.role,
          image:
            user?.image ??
            'https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
        },
        tokens: {
          access: token.accessToken,
          refresh: token.refreshToken,
        },
      });
    },
    onError: ({ response }) => {
      const isPublic = response?.data?.isPublic;
      handleNotification({
        title: isPublic ? 'Inicio de sesión incorrecto' : 'Error',
        variant: isPublic ? 'warning' : 'error',
        message: isPublic
          ? 'Usuario y/o contraseña incorrectas'
          : 'Algo salió mal, intenta más tarde',
      });
    },
  });
};
