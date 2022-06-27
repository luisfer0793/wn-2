import { showNotification } from '@mantine/notifications';

import { notificationStyler } from 'utils/functions.util';

interface OptionsProps {
  title?: string;
  message: string;
  variant: 'success' | 'warning' | 'info' | 'error';
}

const useNotification =
  () =>
  (options: OptionsProps = { variant: 'success', message: '' }) => {
    showNotification({
      ...options,
      styles: notificationStyler(options.variant),
    });
  };

export default useNotification;
