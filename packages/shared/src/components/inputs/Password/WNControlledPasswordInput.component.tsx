import { FC } from 'react';
import { useController } from 'react-hook-form';
import { PasswordInput, PasswordInputProps } from '@mantine/core';

interface WNPasswordInputProps extends PasswordInputProps {
  name: string;
  control: any;
}

const WNControlledPasswordInput: FC<WNPasswordInputProps> = ({
  name,
  control,
  ...restProps
}) => {
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ name, control });

  return (
    <PasswordInput {...restProps} {...field} error={fieldError?.message} />
  );
};

export default WNControlledPasswordInput;
