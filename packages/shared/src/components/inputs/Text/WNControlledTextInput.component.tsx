import { FC } from 'react';
import { useController } from 'react-hook-form';
import { TextInput, TextInputProps } from '@mantine/core';

interface WNTextInputProps extends TextInputProps {
  name: string;
  control: any;
  type: 'text' | 'email';
}

const WNControlledTextInput: FC<WNTextInputProps> = ({
  name,
  control,
  ...restProps
}) => {
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ name, control });

  return <TextInput {...restProps} {...field} error={fieldError?.message} />;
};

export default WNControlledTextInput;
