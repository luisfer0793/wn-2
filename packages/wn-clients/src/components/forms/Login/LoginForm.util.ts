import { InferType, object, string } from 'yup';

export const LoginFormSchema = object({
  email: string()
    .email('Ingresa un correo válido')
    .required('Este campo es requerido'),
  password: string()
    .min(6, 'La contraseña debe de tener al menos 6 caracteres')
    .required('Este campo es requerido'),
});

export type LoginFormData = InferType<typeof LoginFormSchema>;

export const LoginFormDefaultValues: LoginFormData = {
  email: '',
  password: '',
};
