import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Divider, Text } from '@mantine/core';

import { WNControlledTextInput, WNControlledPasswordInput } from '@wn/shared';
import { useAuthenticationService } from 'network/services/authentication/useAuthenticationService.hook';
import {
  LoginFormData,
  LoginFormDefaultValues,
  LoginFormSchema,
} from './LoginForm.util';

const LoginForm: FC = () => {
  const { mutate: requestLogin, isLoading } = useAuthenticationService();

  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: LoginFormDefaultValues,
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmitHandler = (data: LoginFormData) => {
    requestLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
      <WNControlledTextInput
        size="sm"
        name="email"
        type="email"
        control={control}
        placeholder="user@example.com"
      />
      <br />
      <WNControlledPasswordInput
        size="sm"
        name="password"
        control={control}
        placeholder="Tu contraseña"
      />
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Checkbox label="Recordar" />
        <Text
          variant="link"
          weight={700}
          color="green"
          component={Link}
          to="/recuperar-contraseña"
          sx={theme => ({ fontSize: '1.4rem' })}
        >
          ¿Olvidaste tu contraseña?
        </Text>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <Button
          loading={isLoading}
          color="green"
          type="submit"
          style={{ marginBottom: 20 }}
        >
          Iniciar sesión
        </Button>
        <Divider />
        <Text size="sm" style={{ marginTop: 20 }}>
          ¿Aún no tienes cuenta? Regístrate{' '}
          <Text component="span" size="sm" weight={700}>
            aquí
          </Text>
        </Text>
      </div>
    </form>
  );
};

export default LoginForm;
